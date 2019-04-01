const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('../database/db.js');
const model = require('../database/models/Room.js');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/rooms/:id', (req, res) => {
  const { id } = req.params;
  model.getRoomPhotos(id, (error, results) => {
    if (error) {
      res.status(500).end();
      return;
    }
    res.type('json').send(results);
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
