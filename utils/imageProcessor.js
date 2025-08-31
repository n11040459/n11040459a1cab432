const sharp = require('sharp');

exports.resizeImage = async (inputPath, outputPath, width, height) => {
  await sharp(inputPath)
    .resize(width, height)
    .toFile(outputPath);
};
