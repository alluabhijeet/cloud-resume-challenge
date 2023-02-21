const express = require('express');
const app = express();

app.get('/get-count', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Get ${name}!`);
});

app.get('/increment-count', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Increment ${name}!`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});