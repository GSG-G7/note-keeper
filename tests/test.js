const test = require('tape');
const supertest = require('supertest');
const app = require('../src/app');

test('Testing for homepage', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-type', /html/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('<form'), 'Form is an HTML');
      t.end();
    });
});

test('Testing for statics', (t) => {
  supertest(app)
    .get('/css/style.css')
    .expect(200)
    .expect('Content-type', /css/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('*{'), 'File is CSS');
      t.end();
    });
});

test('Testing for statics', (t) => {
  supertest(app)
    .get('/js/index.js')
    .expect(200)
    .expect('Content-type', /javascript/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
