const express = require('express');
const multer = require('multer');
const upload = multer({dest: './uploads/'});
const port = process.env.PORT || 8083;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ message: 'ok' });
});

app.get('/ping', (req, res) => {
	res.json({ path: '/ping', message: 'ok' });
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    var filename = req.file.filename;
    var uploadStatus = 'File Uploaded Successfully';
  } else {
    console.log('No File Uploaded');
    var filename = 'FILE NOT UPLOADED';
    var uploadStatus = 'File Upload Failed';
  }

  res.json({
    status: uploadStatus,
    filename: `Name Of File: ${filename}`,
  });
});

app.listen(port, () => {
  console.log(`App is live on port ${port}`);
});
