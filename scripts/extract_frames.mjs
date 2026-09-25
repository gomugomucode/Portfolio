import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const webpPath = 'C:/Users/Anupam Baral/.gemini/antigravity-ide/brain/c533a782-6c77-4b05-9329-4295809d1238/get_google_reviews_1790338981573.webp';

async function extract() {
  const frames = [60, 100, 140, 180];
  for (const f of frames) {
    const out = `public/images/reviews/frame_${f}.png`;
    await sharp(webpPath, { page: f }).toFile(out);
    console.log(`Saved frame ${f} to ${out}`);
  }
}

extract();
