const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNum: Number,
  photoNum: Number,
  description: String,
  url: String,
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
