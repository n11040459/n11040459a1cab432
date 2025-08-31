const multer = require('multer');
const path = require('path');
const { resizeImage } = require('../utils/imageProcessor');

const upload = multer({ dest: 'uploads/' });

exports.uploadMiddleware = upload.single('image');

exports.processImage = async (req, res) => {
  const inputPath = req.file.path;
  const outputPath = path.join('uploads', `resized-${req.file.filename}.jpg`);
  await resizeImage(inputPath, outputPath, 300, 300);
  res.json({ message: 'Image processed', output: outputPath });
};
