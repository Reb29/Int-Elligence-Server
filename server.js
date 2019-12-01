const express = require('express');
const app = express();
const fs = require('fs');
global.__basedir = __dirname;

app.get('/', (req, res) => {
  var txt = fs.readFileSync(`${__dirname}/lot_data.json`, 'utf8');
  res.send(txt);
  });

app.get('/images/:name', (req, res) => {
  var name = req.params.name;
  var filePath = `${global.__basedir}/images/${name}.jpg`;
  console.log(filePath);
  try {
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    }
  } catch(err) {
    console.error(err);
  }
});

const PORT = process.env.PORT || 7567;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
