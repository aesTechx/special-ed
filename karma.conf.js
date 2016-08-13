// Karma configuration
// Generated on Mon Aug 08 2016 22:22:37 GMT+0400 (GST)

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: [
      './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
      'frontend/lib/angular/angular.js',
      'frontend/lib/angular-mocks/angular-mocks.js',
      'frontend/lib/angular-route/angular-route.js',
      'frontend/lib/angular-animate/angular-animate.js',
      'frontend/lib/angular-resource/angular-resource.js',
      'frontend/lib/angular-touch/angular-touch.js',
      'frontend/lib/angular-bootstrap/ui-bootstrap-tpls.js',
      'frontend/lib/angular-bootstrap/ui-bootstrap.js',
      'lib/ui-router/release/angular-ui-router.js',
      'lib/snapjs/snap.js',
      'lib/angular-snap/angular-snap.js',
      'frontend/scripts/app.js',
      'frontend/scripts/**/*.js',
      'frontend/helpers/*.js',
      'spec/frontend/*.js',
      'spec/frontend/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      'frontend/app/forms/*.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'frontend/app/*.js': ['coverage'], 
      'frontend/helpers/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'progress', 'coverage'],

    coverageReporter: {
      type: 'text',
      dir: 'coverage/'
    },
    specReporter: {
      maxLogLines: 10,         // limit number of lines logged per test 
      suppressErrorSummary: true,  // do not print error summary 
      suppressFailed: false,  // do not print information about failed tests 
      suppressPassed: false,  // do not print information about passed tests 
      suppressSkipped: true,  // do not print information about skipped tests 
      showSpecTiming: false // print the time elapsed for each spec 
    },
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
    ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
