const fs = require('fs');
// const axios = require('axios');

const dbEmplyees = './employees.json';

const getFsEmployess = () => new Promise((resolve, reject) => {
  fs.readFile(dbEmplyees, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('error'));
    }
    resolve(JSON.parse(data));
  });
});

module.exports = getFsEmployess;
