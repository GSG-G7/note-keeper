const fetch = require('node-fetch');
const { readData } = require('../helpers');

module.exports = (req, res, next) => {
  readData()
    .then(data => data.arr[req.params.id - 1].info.pasteLink) // alternate soltion use https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    .then(link => fetch(link)
      .then(resp => resp.text())
      .then(data => res.render('paste', { data })))
    .catch(next);
};
