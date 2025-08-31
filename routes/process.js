const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT');
const { uploadMiddleware, processImage } = require('../controllers/processController');

router.post('/', verifyJWT, uploadMiddleware, processImage);
module.exports = router;
