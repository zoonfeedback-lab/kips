const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const svgDirs = ['icons', 'logos', 'images'];

async function convertSvgToPng() {
  console.log('Starting SVG to PNG conversion...\n');

  for (const dir of svgDirs) {
    const dirPath = path.join(publicDir, dir);

    if (!fs.existsSync(dirPath)) {
      console.log(`Directory not found: ${dirPath}`);
      continue;
    }

    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.svg'));

    for (const file of files) {
      const svgPath = path.join(dirPath, file);
      const pngPath = path.join(dirPath, file.replace('.svg', '.png'));

      try {
        // Determine size based on directory/filename
        let width = 120;
        let height = 120;

        if (dir === 'icons') {
          width = 100;
          height = 100;
        } else if (dir === 'logos') {
          width = 120;
          height = 120;
        } else if (dir === 'images') {
          if (file.includes('hero')) {
            width = 1200;
            height = 600;
          } else if (file.includes('map')) {
            width = 500;
            height = 400;
          }
        }

        await sharp(svgPath, { density: 300 })
          .resize(width, height, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .png()
          .toFile(pngPath);

        console.log(`✓ Converted: ${dir}/${file} → ${file.replace('.svg', '.png')} (${width}x${height})`);
      } catch (error) {
        console.error(`✗ Error converting ${file}:`, error.message);
      }
    }
  }

  console.log('\n✓ PNG conversion complete!');
}

convertSvgToPng().catch(console.error);
