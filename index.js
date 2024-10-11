const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to list directories and files
app.get('/files', (req, res) => {
  fs.readdir('./uploads', (err, files) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ files });
  });
});

// Route to upload a file
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'File uploaded successfully!' });
});

// Route to create a directory
app.post('/create-directory', (req, res) => {
  const dirPath = './uploads/new-directory';
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    res.json({ message: 'Directory created successfully!' });
  } else {
    res.status(400).json({ error: 'Directory already exists' });
  }
});

// Route to delete a file
app.delete('/delete-file', (req, res) => {
  const filePath = `./uploads/${req.body.filename}`;
  fs.unlink(filePath, (err) => {
    if (err) return res.status(400).json({ error: 'File not found' });
    res.json({ message: 'File deleted successfully!' });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
