const fs = require('fs');
const { join } = require('path');

module.exports = newData => new Promise((resolve, reject) => {
  fs.readFile(join(__dirname, '..', 'models', 'data.json'), (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
}).then(data => JSON.parse(data))
  .then((data) => { data.arr.push(JSON.parse(newData)); return data; })
  .then(data => fs.writeFile(join(__dirname, '..', 'models', 'data.json'), JSON.stringify(data), (err) => { if (err) throw err; }));
