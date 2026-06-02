const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function main() {
  const logoPath = path.join(__dirname, '../public/KIPSLOGO(C).png');
  const faviconIcoPath = path.join(__dirname, '../src/app/favicon.ico');
  const iconPngPath = path.join(__dirname, '../src/app/icon.png');

  console.log('Generating favicon and icon from KIPSLOGO(C).png...');

  if (!fs.existsSync(logoPath)) {
    console.error(`Error: Logo not found at ${logoPath}`);
    process.exit(1);
  }

  // Next.js App Router automatically picks up icon.png and generates link tags for it.
  // Overwrite favicon.ico with a 32x32 version.
  await sharp(logoPath)
    .resize(32, 32)
    .png()
    .toFile(faviconIcoPath);
  console.log('✓ Overwritten src/app/favicon.ico (32x32)');

  // Create a 192x192 icon.png for devices/modern browsers.
  await sharp(logoPath)
    .resize(192, 192)
    .png()
    .toFile(iconPngPath);
  console.log('✓ Created src/app/icon.png (192x192)');
}

main().catch(console.error);
