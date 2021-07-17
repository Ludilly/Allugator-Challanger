const cors = require('cors');
const express = require('express');
const router = require('./src/routes/routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/employees', router);

const PORT = '3001';

app.listen(PORT, () => {
  console.log('Online');
});
