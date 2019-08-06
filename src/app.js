const express = require('express');
const { join } = require('path');
const exphbs = require('express-handlebars');
const router = require('./controllers');
const helpers = require('./views/helpers');

const app = express();

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 5000);

app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);

app.engine('hbs', exphbs({
  extname: 'hbs',
  layoutsDir: join(__dirname, 'views', 'layouts'),
  partialsDir: join(__dirname, 'views', 'partials'),
  defaultLayout: 'main',
  helpers,
}));
module.exports = app;
