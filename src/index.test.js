const request = require('supertest');
const app = require('.');

const randomString = length => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

describe('the root route', () => {
  test('it should send 200', () => {
    return request(app)
      .get('/')
      .expect(200);
  });
});

describe('the wildcard handler', () => {
  test('it should 404 for unknown routes', () => {
    return request(app)
      .get(`/${randomString(10)}`)
      .expect(404);
  });
});

describe('the body parser error handling', () => {
  test('it should throw a 400 error on bad json', () => {
    return request(app)
      .post('/')
      .send('{bad json')
      .set('Content-Type', 'application/json')
      .expect(400);
  });
});
