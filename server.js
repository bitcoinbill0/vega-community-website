const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.json({message: 'Hello World!'});
});

app.get('/tokens', (req, res) => {
  res.sendfile(__dirname + '/public/tokens.html');
});

app.get('/validators', (req, res) => {
  res.sendfile(__dirname + '/public/validators.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
