module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', '*.js', 'test//*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    mochaTest: {
      options: {
        reporter: 'nyan'
      },
      src: ['tests/*.js']
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          file: 'server.js',
          args: [],
          ignoredFiles: ['public/**'],
          watchedExtensions: ['js'],
          delayTime: 1,
          cwd: __dirname
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['jshint', 'mochaTest', 'nodemon']);


};
