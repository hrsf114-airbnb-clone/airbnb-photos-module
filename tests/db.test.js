const db = require('../database/db.js');
const models = require('../database/models/index.js');

describe('database seeded', () => {
  afterAll(() => db.close());

  test('documents populated in db', (done) => {
    models.Room.distinct('roomNum')
      .exec((err, results) => {
        expect(results.length).toEqual(100);
        done();
      });
  });

  test('photo urls populated for a given document', (done) => {
    const roomNum = Math.floor(Math.random() * 100) + 1;
    models.Room.findOne({ roomNum })
      .select('url')
      .exec((err, results) => {
        expect(results).toBeTruthy();
        done();
      });
  });
});
