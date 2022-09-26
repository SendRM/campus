const path = require('path');
const formidable = require('formidable');
module.exports = (filePath) => {
  const form = formidable({
    multiples: true,
    uploadDir: path.join(__dirname, '../', 'public', 'uploads', filePath),
    keepExtensions: true
  });
  return form;
}