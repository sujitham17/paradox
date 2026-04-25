import Jimp from 'jimp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = join(__dirname, '../public/logo.png');
const outputPath = join(__dirname, '../public/logo-transparent.png');

const image = await Jimp.read(inputPath);

image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
  const r = this.bitmap.data[idx + 0];
  const g = this.bitmap.data[idx + 1];
  const b = this.bitmap.data[idx + 2];
  // Make near-white pixels transparent
  if (r > 220 && g > 220 && b > 220) {
    this.bitmap.data[idx + 3] = 0;
  }
});

await image.writeAsync(outputPath);
console.log('✅ Saved transparent logo to', outputPath);
