// generate-favicons.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Sizes to generate
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

// Source SVG path
const svgPath = path.join(__dirname, '../public/images/logo-2.svg');
const outputDir = path.join(__dirname, '../public/images');

// Make sure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to generate a favicon of a specific size
async function generateFavicon(size) {
  try {
    await sharp(svgPath).resize(size.size, size.size).png().toFile(path.join(outputDir, size.name));

    console.log(`Generated ${size.name}`);
  } catch (error) {
    console.error(`Error generating ${size.name}:`, error);
  }
}

// Generate all sizes
async function generateAllFavicons() {
  console.log('Starting favicon generation...');

  for (const size of sizes) {
    await generateFavicon(size);
  }

  console.log('Favicon generation complete!');
}

// Run the script
generateAllFavicons();
