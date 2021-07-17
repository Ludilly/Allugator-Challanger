const fs = require('fs/promises');
const path = require('path');

const EMPLOYEES_FILE_PATH = path.join(__dirname, '..', 'data', 'employees.json');

const getFsEmployees = async () => {
  const result = await fs.readFile(EMPLOYEES_FILE_PATH, 'utf-8');
  return JSON.parse(result);
};

const setFsEmployees = async (newEmployees) => {
  fs.writeFile(EMPLOYEES_FILE_PATH, JSON.stringify(newEmployees, null, 2));
};

module.exports = {
  getFsEmployees,
  setFsEmployees,
};
