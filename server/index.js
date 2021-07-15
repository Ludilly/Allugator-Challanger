const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routes/routes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/', router);

console.log('aoba');

const PORT = '3001';

app.listen(PORT, () => {
  console.log('Online');
});
