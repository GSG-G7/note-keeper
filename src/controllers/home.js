const { readData } = require('../helpers');

module.exports = (req, res) => {
  readData()
    .then(data => data.arr)
    .then(data => res.render('home', { notes: data }));
};
