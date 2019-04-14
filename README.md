# Airbnb Photos Module

- Remake of the Airbnb listing photos components, dockerized and hosted on Amazon EC2
- Access the service in production [here](http://ec2-54-215-239-201.us-west-1.compute.amazonaws.com/rooms/14/)
- Access the docker image [here](https://hub.docker.com/r/evanskaplan/airbnb_photos/tags)
- Note: this module is one microservice of an SOA designed web app
  - Check out the full app on EC2 [here](http://ec2-13-52-187-113.us-west-1.compute.amazonaws.com/rooms/14/)
  - Check out the app proxy on Github [here](https://github.com/hrsf114-airbnb-clone/airbnb-proxy-evan) and on DockerHub [here](https://hub.docker.com/r/evanskaplan/airbnb_proxy/tags)

## Related Projects

  - https://github.com/hrsf114-airbnb-clone

## Table of Contents

1. Usage
1. Requirements
1. Development
1. Installing Dependencies

## Usage
- Set up with Docker
  - Find this module's image on DockerHub at evanskaplan/airbnb_photos_v4
  - To start the app run `docker run -d -p 80:3001 evanskaplan/airbnb_photos:v4`
  - Navigative to localhost/rooms/room_id where room_id is a number between 1-100
  
- Set up with NPM
  - `npm run seed` to populate your database
  - `npm run react-dev` to compile the webpack bundle
  - `npm start` to start your server (set up to run on port 3001)
 - Navigate to a listing
  - This app handles requests for a specific listing's page e.g. http://localhost:3001/rooms/42/
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
- Container
  - Containerized with [Docker](https://www.docker.com/)
- Hosting
  - Hosted on [Amazon EC2](https://aws.amazon.com/ec2/) and [Amazon S3](https://aws.amazon.com/s3/)
## Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

