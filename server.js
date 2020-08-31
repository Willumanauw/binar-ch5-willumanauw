// import module
const express = require('express');
const router = require('./routes');
const path = require('path');
// const http = require ( 'http' );
// const fs = require ( 'fs' );

// inisialisasi app
const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'ejs');

app.use(router);

// app.get('/', (req, res) => {
//   res.send('Hello World! Ini sudah menggunakan Nodemon')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})