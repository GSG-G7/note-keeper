const fetch = require('node-fetch');
const qs = require('querystring');
const {
  writeData, insertRawIntoLink, generateId,
} = require('../helpers');

module.exports = (req, res, next) => {
  const {
    // eslint-disable-next-line camelcase
    username, password, email, api_paste_code, api_paste_name,
  } = req.body;
  const url = 'https://pastebin.com/api/api_post.php';
  const requestObj = {
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
  };
  fetch(url, requestObj)
    .then(resp => resp.text())
    .then((resp) => {
      writeData(JSON.stringify({
        id: generateId(),
        info: {
          username,
          email,
          password,
          title: api_paste_name,
          pasteLink: insertRawIntoLink(resp),
        },
      }));
      return resp;
    })
    .then(() => res.redirect('/'))
    .catch(next);
};
