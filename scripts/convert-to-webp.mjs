import sharp from 'sharp';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const toConvert = [
  { input: 'logo.png', output: 'logo.webp', quality: 90 },
  { input: 'og-image.png', output: 'og-image-converted.webp', quality: 85 },
];

for (const file of toConvert) {
  const inputPath = join(publicDir, file.input);
  const outputPath = join(publicDir, file.output);

  if (!existsSync(inputPath)) {
    console.log(`⚠  Skipping ${file.input} — not found in /public`);
    continue;
  }

  try {
    const info = await sharp(inputPath)
      .webp({ quality: file.quality, effort: 6 })
      .toFile(outputPath);
    console.log(`✅ Converted ${file.input} → ${file.output}  (${info.size} bytes)`);
  } catch (err) {
    console.error(`❌ Failed to convert ${file.input}:`, err.message);
  }
}
