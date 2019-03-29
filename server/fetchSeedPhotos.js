const request = require('request');
const fs = require('fs');

const photoSource = 'https://loremflickr.com/956/640/house';
let pictureCount = 1;

const download = function fetchPhotos(uri, filepath, callback) {
  if (pictureCount <= 100) {
    request(uri).pipe(fs.createWriteStream(filepath))
      .on('close', callback);
  }
};

const downloadCallback = function fetchPhotosCallback() {
  console.log('done');
  pictureCount += 1;
  download(photoSource, `./seedPhotos/img${pictureCount}.jpg`, downloadCallback);
};

download(photoSource, `./seedPhotos/img${pictureCount}.jpg`, downloadCallback); // kick off seed photo fetch
