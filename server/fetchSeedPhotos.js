const request = require('request');
const fs = require('fs');

const photoSource = 'https://loremflickr.com/956/640/house';
let pictureCount = 1;

function fetchPhotos(uri, filepath, callback) {
  if (pictureCount <= 100) {
    request(uri)
      .on('error', err => console.log(err))
      .pipe(fs.createWriteStream(filepath))
      .on('close', callback);
  }
}

function fetchPhotosCallback() {
  console.log('done');
  pictureCount += 1;
  fetchPhotos(photoSource, `./seedPhotos/img${pictureCount}.jpg`, fetchPhotosCallback);
}

fetchPhotos(photoSource, `./seedPhotos/img${pictureCount}.jpg`, fetchPhotosCallback); // kick off seed photo fetch
