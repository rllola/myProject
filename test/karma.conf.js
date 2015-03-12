// Karma configuration

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // Bower files 
      'app/assets/components/angular/angular.js',
      'app/assets/components/angular-route/angular-route.js',
      'app/assets/components/angular-touch/angular-touch.js',

      // Test javascript file
      'app/assets/components/angular-mocks/angular-mocks.js',


      // App files
      'app/app.modules.js',
      'app/app.routes.js',


      // Core files. The most important !
      'app/features/**/*.js',
      'app/shared/**/*.js',

      // Test files
      'test/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 9001,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
