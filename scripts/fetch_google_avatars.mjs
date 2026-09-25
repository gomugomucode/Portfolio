import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    locale: 'en-US',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  const url = 'https://www.google.com/maps/place/Anupam+Baral+-+AI%2FML+%26+Full-Stack+Developer/@28.397455,84.1301506,7z/data=!3m1!4b1!4m6!3m5!1s0x85dbafd39ae92f89:0x13b3b1f0138c19d0!8m2!3d28.397455!4d84.1301506!16s%2Fg%2F11zc_q7f9c';

  console.log('Navigating to Google Maps URL...');
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });

  // Dismiss any consent or cookie buttons
  try {
    const consentButton = page.locator('button:has-text("Accept all"), button:has-text("Reject all"), button:has-text("I agree")').first();
    if (await consentButton.isVisible({ timeout: 4000 })) {
      await consentButton.click();
      console.log('Dismissed consent dialog');
      await page.waitForTimeout(2000);
    }
  } catch (e) {
    // Ignore
  }

  // Click on Reviews tab/button
  try {
    const reviewsTab = page.locator('button[aria-label*="Reviews"], button:has-text("Reviews"), button[data-tab-index="1"]').first();
    if (await reviewsTab.isVisible({ timeout: 5000 })) {
      await reviewsTab.click();
      console.log('Clicked Reviews tab');
      await page.waitForTimeout(3000);
    }
  } catch (e) {
    console.log('Could not click reviews tab:', e.message);
  }

  // Wait a moment for review elements to render
  await page.waitForTimeout(3000);

  // Extract all images in the reviews list
  const results = await page.evaluate(() => {
    // Find reviewer containers
    const reviews = [];
    const reviewElements = document.querySelectorAll('div[data-review-id], div.jftiEf, div[aria-label*="stars"], div.G8UDq');
    
    // Fallback: look for all images with alt or sibling with text
    const allImages = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt,
      width: img.width,
      height: img.height,
      parentText: img.parentElement ? img.parentElement.innerText : ''
    }));

    return {
      reviewCount: reviewElements.length,
      images: allImages.filter(img => img.src && (img.src.includes('googleusercontent') || img.src.includes('ggpht')))
    };
  });

  console.log('Extracted Google images:', JSON.stringify(results, null, 2));

  await browser.close();
}

main().catch(err => {
  console.error('Error running script:', err);
  process.exit(1);
});
