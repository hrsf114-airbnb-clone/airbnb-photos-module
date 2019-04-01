const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNum: Number,
  photoNum: Number,
  description: String,
  url: String,
});

const Room = mongoose.model('Room', roomSchema);

function getRoomPhotos(id, callback) {
  Room.find()
    .where('roomNum').equals(id)
    .sort('photoNum')
    .exec(callback);
}

module.exports = { Room, getRoomPhotos };
