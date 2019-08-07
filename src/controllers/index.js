const router = require('express').Router();
const fetch = require('node-fetch');
const qs = require('querystring');
const { getData } = require('../helpers');
const { clientError, serverError } = require('./error');

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

router.post('/post', (req, res) => {
  const url = 'https://pastebin.com/api/api_post.php';
  // eslint-disable-next-line camelcase
  const { api_paste_code, api_paste_name } = req.body;
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: qs.stringify({
      api_dev_key: process.env.API_KEY,
      api_option: 'paste',
      api_paste_private: 1,
      api_paste_code,
      api_paste_name,
    }),
  }).then(resp => resp.text())
    .then(resp => res.end(resp));
});


router.use(clientError);
router.use(serverError);
module.exports = router;
