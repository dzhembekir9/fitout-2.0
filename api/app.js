const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.json({ message: 'hello' });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
