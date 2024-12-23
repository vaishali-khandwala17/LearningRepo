const multer = require('multer');

// Configure storage for uploaded files
const storage = multer.memoryStorage(); // Store files in memory as Buffer
const upload = multer({ storage });

module.exports = upload;
