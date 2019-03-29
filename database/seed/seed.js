const mongoose = require('mongoose');
const faker = require('faker');
const room = require('../index.js');

mongoose.pluralize(null); // don't pluralize collection name when storing

function createPhotoDocuments(roomId) {
  const photoCount = Math.floor(Math.random() * 20) + 1;
  const photoDocuments = [];

  for (let j = 1; j <= photoCount; j += 1) {
    const imageNum = Math.floor(Math.random() * 100) + 1;
    const photoDocument = {
      photoId: `${roomId}_photo_${j}`,
      description: faker.lorem.sentence(),
      url: `https://s3-us-west-1.amazonaws.com/hrsf-fec/img${imageNum}.jpg`,
    };
    photoDocuments.push(photoDocument);
  }

  return photoDocuments;
}

function createRoomCollections() {
  for (let i = 1; i <= 100; i += 1) {
    const roomId = `room_${i}`;
    const Room = mongoose.model(roomId, room.roomSchema);
    const photos = createPhotoDocuments(roomId);
    Room.create(photos)
      .catch(err => console.error(err));
  }
}

createRoomCollections();
