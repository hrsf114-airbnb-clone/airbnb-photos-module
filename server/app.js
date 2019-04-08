const express = require('express');
const morgan = require('morgan');
const path = require('path');
const model = require('../database/models/Room.js');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/rooms/:id', express.static('client/dist'));
app.use(express.static('client/dist'));


app.get('/api/rooms/:id', (req, res) => {
  const { id } = req.params;
  model.getRoomPhotos(id, (error, results) => {
    if (results.length === 0 || error) {
      res.status(500).end();
      return;
    }
    res.type('json').send(results);
  });
});

module.exports = app;
