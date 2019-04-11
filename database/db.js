const mongoose = require('mongoose');

const dbURI = 'mongodb://172.17.0.3/airbnb_photos';
mongoose.connect(dbURI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', error => console.error('connection error:', error));
db.once('open', () => console.log('connected!'));

module.exports = db;
