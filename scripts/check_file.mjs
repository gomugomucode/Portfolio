import fs from 'fs';

const file = 'C:/Users/Anupam Baral/.gemini/antigravity-ide/brain/c533a782-6c77-4b05-9329-4295809d1238/.system_generated/steps/319/content.md';
if (fs.existsSync(file)) {
  const c = fs.readFileSync(file, 'utf8');
  console.log('File size:', c.length);

  // Search for googleusercontent or lh3 or ggpht
  const regex = /https:\/\/[^"'\s\\]*(?:googleusercontent|ggpht)[^"'\s\\]*/g;
  const matches = c.match(regex);
  console.log('Found matches:', matches ? matches.length : 0);
  if (matches) {
    const unique = [...new Set(matches)];
    console.log('Unique:', unique.slice(0, 30));
  }

  // Also search for "BKC" or "Sanish"
  console.log('Includes BKC:', c.includes('BKC'));
  console.log('Includes Sanish:', c.includes('Sanish'));
  console.log('Includes Baral:', c.includes('Baral'));
} else {
  console.log('File does not exist');
}
