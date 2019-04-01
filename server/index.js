const db = require('../database/db.js'); // start db connection
const app = require('./app.js');

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
