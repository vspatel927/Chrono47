const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const FILES_TO_CONVERT = [
    'public/assets/hero-poster.png',
    'public/assets/watches/daytona-panda.png',
    'public/assets/watches/royal-oak-rose-gold.png',
    'public/assets/watches/nautilus-5711.png'
];

async function convert() {
    console.log('Starting AVIF conversion...');

    for (const file of FILES_TO_CONVERT) {
        const inputPath = path.join(process.cwd(), file);
        if (!fs.existsSync(inputPath)) {
            console.warn(`File not found: ${file}`);
            continue;
        }

        const outputPath = inputPath.replace(/\.png$/, '.avif');

        try {
            await sharp(inputPath)
                .avif({ quality: 80 })
                .toFile(outputPath);

            // Get sizes to show savings
            const oldSize = fs.statSync(inputPath).size / 1024;
            const newSize = fs.statSync(outputPath).size / 1024;
            const savings = ((oldSize - newSize) / oldSize * 100).toFixed(2);

            console.log(`✅ Converted ${path.basename(file)}`);
            console.log(`   ${oldSize.toFixed(2)}KB -> ${newSize.toFixed(2)}KB (Saved ${savings}%)`);
        } catch (err) {
            console.error(`❌ Failed to convert ${file}:`, err);
        }
    }
}

convert();
