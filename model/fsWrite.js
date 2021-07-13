const fs = require('fs');

const dbEmplyees = './employees.json';

const setFsEmployees = (text) => new Promise((resolve, reject) => {
  fs.writeFile(dbEmplyees, text, 'utf8', (err) => {
    if (err) {
      reject(new Error('Error'));
    }
    resolve(console.log('Ok!'));
  });
});

  module.exports = setFsEmployees;
