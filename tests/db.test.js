const mongoose = require('mongoose');
const model = require('../database/models/Room.js');

const dbURI = 'mongodb://localhost/airbnb_photos';

describe('database seeded', () => {
  beforeEach(() => mongoose.connect(dbURI));
  afterEach(() => mongoose.disconnect());

  test('documents populated in db', (done) => {
    model.Room.distinct('roomNum')
      .exec((err, results) => {
        expect(results.length).toEqual(100);
        done();
      });
  });

  test('photo urls populated for a given document', (done) => {
    const roomNum = Math.floor(Math.random() * 100) + 1;
    model.Room.findOne({ roomNum })
      .select('url')
      .exec((err, results) => {
        expect(results).toBeTruthy();
        done();
      });
  });
});
