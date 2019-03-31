const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNum: Number,
  photoNum: Number,
  description: String,
  url: String,
});

const Room = mongoose.model('Room', roomSchema);

Room.count().exec((err, count) => console.log(count));

module.exports = Room;
