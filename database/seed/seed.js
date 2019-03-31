const faker = require('faker');
const db = require('../db.js'); // start db connection
const models = require('../models/index.js');


function createPhotos(roomNum) {
  const photos = [];
  const photoCount = Math.floor(Math.random() * 20) + 1;

  for (let j = 1; j <= photoCount; j += 1) {
    const randomImgId = Math.floor(Math.random() * 100) + 1;

    const photo = {
      roomNum,
      photoNum: j,
      description: faker.lorem.sentence(),
      url: `https://s3-us-west-1.amazonaws.com/hrsf-fec/img${randomImgId}.jpg`,
    };

    photos.push(photo);
  }

  return photos;
}

function createRooms() {
  const roomPhotos = [];

  for (let i = 1; i <= 100; i += 1) {
    const roomNum = i;
    const photos = createPhotos(roomNum);
    roomPhotos.push(...photos);
  }

  models.Room.create(roomPhotos)
    .then(() => db.close());
}

createRooms();
