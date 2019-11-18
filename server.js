const express = require('express');
const app = express();
const fs = require('fs');
global.__basedir = __dirname;

app.get('/', (req, res) => {
  var txt = fs.readFileSync(`${__dirname}/lot_data.json`, 'utf8');
  res.send(txt);
  });

const PORT = process.env.PORT || 7567;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});