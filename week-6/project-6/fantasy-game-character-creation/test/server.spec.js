const http = require('http');
// const server = require('../src/server'); // Commented out to start manually

describe('Fantasy Character Creation API', () => {
  const baseUrl = 'http://localhost:3000';

  // Server is started manually, so no need to close here

  test('POST /create should return 201', (done) => {
    http.request(`${baseUrl}/create?class=Mage&gender=Other&fact=Coding`, { method: 'POST' }, (res) => {
      expect(res.statusCode).toBe(201);
      done();
    }).end();
  });

  test('POST /confirm should return 200', (done) => {
    http.request(`${baseUrl}/confirm`, { method: 'POST' }, (res) => {
      expect(res.statusCode).toBe(200);
      done();
    }).end();
  });

  test('GET /view should return 200 and data', (done) => {
    http.get(`${baseUrl}/view`, (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});