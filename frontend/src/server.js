// server.js

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/validate-text', (req, res) => {
  const { text } = req.body;
  // Lakukan validasi teks di sini, jika teks mengandung kata-kata buruk, kirimkan respons 403
  // Contoh validasi sederhana
  if (text.toLowerCase().includes('kata buruk')) {
    return res.status(403).send('Teks mengandung kata-kata buruk.');
  }
  // Jika tidak ada masalah, kirimkan respons 200 OK
  res.status(200).send('Teks valid.');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
