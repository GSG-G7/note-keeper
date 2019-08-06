const router = require('express').Router();
const fetch = require('node-fetch');
const { getData } = require('../helpers');
const {clientError, serverError} = require('./error');

router.get('/', (req, res) => {
  res.render('home', {});
});

router.get('/paste/:id', (req, res, next) => {
  getData()
    .then(data => data.arr[req.params.id - 1].info.link)
    .then(link => fetch(link)
      .then(resp => resp.text())
      .then(data => res.render('paste', { data })))
    .catch(next);
});

router.use(clientError);
router.use(serverError);
module.exports = router;
