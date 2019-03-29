const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airbnb_photos', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', error => console.error('connection error:', error));
db.once('open', () => console.log('connected!'));

const roomSchema = new mongoose.Schema({
  photoId: String,
  description: String,
  url: String,
});

module.exports.roomSchema = roomSchema;
