const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../server/app.js');

const dbURI = 'mongodb://localhost/airbnb_photos';

describe('request response cycle', () => {
  beforeEach(() => mongoose.connect(dbURI));
  afterEach(() => mongoose.disconnect());

  test('GET /api/rooms headers', (done) => {
    const roomNum = Math.floor(Math.random() * 100) + 1;
    request(app)
      .get(`/api/photos/${roomNum}`)
      .then((response) => {
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        done();
      });
  });

  test('GET /api/rooms body', (done) => {
    const roomNum = Math.floor(Math.random() * 100) + 1;
    request(app)
      .get(`/api/photos/${roomNum}`)
      .then((response) => {
        expect(response.body[0]).toHaveProperty('roomNum');
        expect(response.body[0]).toHaveProperty('photoNum');
        expect(response.body[0]).toHaveProperty('description');
        expect(response.body[0]).toHaveProperty('url');
        done();
      });
  });
});
