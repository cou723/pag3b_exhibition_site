/* eslint-disable no-undef */
import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const optimizeImage = async (inputPath, outputPath, options = {}) => {
  const defaults = {
    width: 1920,
    quality: 80,
    effort: 6,
    smartSubsample: true
  };
  const opts = { ...defaults, ...options };

  await sharp(inputPath)
    .resize(opts.width, null, {
      withoutEnlargement: true,
      fit: 'inside'
    })
    .webp({
      quality: opts.quality,
      effort: opts.effort,
      smartSubsample: opts.smartSubsample
    })
    .toFile(outputPath);

  console.log(`Optimized: ${inputPath} -> ${outputPath}`);
};

// keyboard-02.pngを最適化
await optimizeImage(
  join(__dirname, '../src/assets/images/hero/keyboard-02.png'),
  join(__dirname, '../src/assets/images/hero/keyboard-02.webp'),
  { width: 1920, quality: 80 }
);

console.log('Image optimization complete!');
