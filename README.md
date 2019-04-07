# Airbnb Photos Module

- Remake of the photos components on an Airbnb listing
- This repo contains both the photos module on a listing's landing page and a photos slideshow view

## Related Projects

  - https://github.com/hrsf114-airbnb-clone

## Table of Contents

1. Usage
1. Requirements
1. Development
1. Installing Dependencies

## Usage

- Set up
  - `npm run seed` to populate your database
  - `npm run react-dev` to compile the webpack bundle
  - `npm start` to start your server (set up to run on port 3000)
- Navigate to a listing
  - This app handles requests for a specific listing's page e.g. http://localhost:3000/rooms/42/
  - There are 100 listings in this app; change the url parameter after rooms to navigate to another listing
  - Click on a photo in a listing to navigate to the photos carousel view

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0 or higher

## Development
- Client
  - Frontend designed with [React](https://reactjs.org/)
- Server
  - App served via an [Express](https://expressjs.com/) server
- Database
  - Listing/Photo data stored in a [Mongo](https://www.mongodb.com/) database, accessed via [Mongoose](https://mongoosejs.com/)
- Testing
  - Unit tests written in [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/)
  - Network request tests implemented with [supertest](https://www.npmjs.com/package/supertest)
  - Continuous integration set up with [CircleCI](https://circleci.com/)
  - `npm run test` to execute tests

### Installing_Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

