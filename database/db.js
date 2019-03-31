const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/airbnb_photos';
mongoose.connect(dbURI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', error => console.error('connection error:', error));
db.once('open', () => console.log('connected!'));

module.exports = db;
