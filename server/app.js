const express = require('express');
const morgan = require('morgan');
const path = require('path');
const model = require('../database/models/Room.js');

const app = express();

app.get('/rooms/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/rooms/:id/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/bundle.js'));
});

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/rooms/:id', (req, res) => {
  const { id } = req.params;
  model.getRoomPhotos(id, (error, results) => {
    if (results.length === 0) {
      res.status(500).end();
      return;
    }
    res.type('json').send(results);
  });
});

module.exports = app;
