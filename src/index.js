const app = require('./app');

const port = app.get('port');
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is listening on http://localhost:${port}`);
});
