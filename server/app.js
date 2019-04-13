const express = require('express');
const morgan = require('morgan');
const model = require('../database/models/Room.js');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/rooms/:id', express.static('client/dist'));
app.use('/bundle.js', express.static('client/dist'));

app.get('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  model.getRoomPhotos(id, (error, results) => {
    if (!results || (results.length === 0 || error)) {
      res.status(500).end();
    }
    res.type('json').send(results);
  });
});

module.exports = app;
