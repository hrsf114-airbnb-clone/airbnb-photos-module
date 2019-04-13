/*eslint-disable*/
module.exports = function(grunt) {
  require('jit-grunt')(grunt)
  grunt.initConfig({
    aws: grunt.file.readJSON( 's3-keys.json' ),
    aws_s3: {
        options: {
            accessKeyId: '<%= aws.AWSAccessKeyId %>',
            secretAccessKey: '<%= aws.AWSSecretKey %>', 
            region: 'us-west-1'
        },
        dist: {
            options: {
                bucket: 'hrsf-fec'
            },
            files: [
              {
                  expand: true,
                  cwd: 'client/dist/',
                  src: [ 'bundle.js' ],
                  dest: '/bundles/'
              }
          ]
        }
    }
  });

  grunt.registerTask( 'deploy', 'aws_s3:dist' );
};
