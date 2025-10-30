const express = require('express');
const path = require('path');
const app = express();

// Middleware untuk menyajikan file statis
app.use(express.static(path.join(__dirname, 'public')));

// Route default
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Jangan gunakan app.listen di Vercel
module.exports = app;
