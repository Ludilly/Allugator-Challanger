const express = require('express');
const bodyParser = require('body-parser');
const router = require('./controller/route');

const app = express();
app.use(bodyParser.json());

app.use('/', router);

const PORT = '3000';

app.listen(PORT, () => {
  console.log('Online');
});
