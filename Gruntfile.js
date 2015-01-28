'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    simplemocha: {
      lib: {
        src: ['test/**/*.test.js']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      lib: ['**/*.js', '!lib/parser.js', '!node_modules/**/*.js'],
      test: ['test/**/*.js']
    },
    peg: {
      expression: {
        options: {
          allowedStartRules: ['start', 'expression']
        },
        src: "lib/grammar.pegjs",
        dest: "lib/parser.js"
      }
    },
    release: {}
  });

  grunt.registerTask('default', [ 'peg', 'test' ]);
  grunt.registerTask('test', [ 'jshint', 'simplemocha' ]);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-release');
  grunt.loadNpmTasks('grunt-peg');
};
