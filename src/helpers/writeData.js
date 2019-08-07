const fs = require('fs');
const { join } = require('path');

module.exports = newData => new Promise((resolve, reject) => {
  fs.readFile(join(__dirname, '..', 'models', 'data.json'), (err, data) => {
    if (err) resolve(err); // shhhhh
    else resolve(data);
  });
}).then((data) => { // this receives the data from the file, parses it, returns it, if parse fails,
  //                   for some reason like, that the json has invalid data
  //                   or the json doesnt exist, it will create an object
  try {
    return JSON.parse(data);
  } catch (e) {
    return { arr: [] }; // here that has an array that we can push into it and
    //                      returns it to the next then
  }
})
  .then((data) => { // here it we add the new data into the array with array.push()
    data.arr.push(JSON.parse(newData));
    return data;
  })
  .then(data => fs.writeFile(join(__dirname, '..', 'models', 'data.json'), JSON.stringify(data), (err) => { if (err) throw err; })); 
// and here we write the json into the file, even if it doesnt exist
