const router = require('express').Router();
const { clientError, serverError } = require('./error');
const paste = require('./paste');
const post = require('./post');
const home = require('./home');

router.get('/', home);
router.get('/paste/:id', paste);

router.post('/post', post);

router.use(clientError);
router.use(serverError);
module.exports = router;
