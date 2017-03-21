// Karma configuration
// Generated on Tue Mar 21 2017 08:16:05 GMT+0200 (South Africa Standard Time)

function manglePreProcessorFactory(config) {
  config = config || {};
  var 
    mangleConfig = config.mangleConfig || {},
    addProperties = mangleConfig.add || {};
  return (content, file, done) => {
    try {
      var obj = Object.assign(JSON.parse(content), addProperties);
      obj.foo = "wibbles";
      done(JSON.stringify(obj));
    } catch (e) {
      done(content);
    }
  };
}
manglePreProcessorFactory.$inject = ["config.mangleConfig"];

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],


    // list of files / patterns to load in the browser
    files: [
      "node_modules/jquery/dist/jquery.min.js",
      "specs/**/*.js"
    ],


    // list of files to exclude
    exclude: [
    ],

    plugins: [
      "karma-chrome-launcher",
      "karma-jasmine",
      { "preprocessor:mangle": ["factory", manglePreProcessorFactory] }
    ],

    mangleConfig: {
      add: {
        moo: "said the cow"
      }
    },
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "**/*.json": ["mangle"]
    },

    proxies: {
      "/data.json": "/base/specs/data.json"
    },


    // test results reporter to use
    // possible values: "dots", "progress"
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress"],


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
    browsers: ["Chrome"],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
