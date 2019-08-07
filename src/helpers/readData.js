const fs = require('fs');
const { join } = require('path');

module.exports = () => new Promise((resolve, reject) => {
  fs.readFile(join(__dirname, '..', 'models', 'data.json'), (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
}).then(data => JSON.parse(data));
