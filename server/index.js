const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routes/routes');

const app = express();
app.use(bodyParser.json());

app.use('/', router);

const PORT = '3000';

app.listen(PORT, () => {
  console.log('Online');
});
