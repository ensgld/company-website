import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesToConvert = [
  './src/assets/hero/ofis-ortami.jpg',
  './src/assets/hero/teknik-servis-elemani.png',
  './src/assets/hero/farkli-makine-turleri.png',
  './src/assets/hero/office-printing-hero.png',
  './src/assets/hero/sarf-malzeme-destegi.png',
  './src/assets/hizli-servis.png',
  './src/assets/is-akisi-yerinde-servis.png',
  './src/assets/ofis-ortami-3.png'
];

async function convertToWebp() {
  console.log('Starting image compression and WebP conversion...\n');
  let totalSaved = 0;
  let totalOld = 0;
  let totalNew = 0;

  for (const imgPath of imagesToConvert) {
    if (!fs.existsSync(imgPath)) {
      console.warn(`⚠️ File not found: ${imgPath}`);
      continue;
    }
    const dir = path.dirname(imgPath);
    const ext = path.extname(imgPath);
    const base = path.basename(imgPath, ext);
    const targetPath = path.join(dir, `${base}.webp`);
    
    try {
      await sharp(imgPath)
        .webp({ quality: 82 })
        .toFile(targetPath);
      
      const oldSize = fs.statSync(imgPath).size;
      const newSize = fs.statSync(targetPath).size;
      const savedBytes = oldSize - newSize;
      const pct = ((savedBytes) / oldSize * 100).toFixed(1);
      
      totalOld += oldSize;
      totalNew += newSize;
      totalSaved += savedBytes;
      
      console.log(`✓ Converted: ${base}${ext} (${(oldSize/1024/1024).toFixed(2)} MB) ➔ ${base}.webp (${(newSize/1024).toFixed(1)} KB) [Saved ${pct}%]`);
    } catch (err) {
      console.error(`✗ Error converting ${imgPath}:`, err.message);
    }
  }

  console.log('\n=========================================');
  console.log(`🎉 Image Conversion Summary:`);
  console.log(`• Total Original Size: ${(totalOld/1024/1024).toFixed(2)} MB`);
  console.log(`• Total Optimized Size: ${(totalNew/1024/1024).toFixed(2)} MB`);
  console.log(`• Total Space Saved: ${(totalSaved/1024/1024).toFixed(2)} MB (${(totalSaved/totalOld*100).toFixed(1)}% reduction!)`);
  console.log('=========================================\n');
}

convertToWebp();
