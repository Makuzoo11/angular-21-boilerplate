<<<<<<< HEAD
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

=======
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
<<<<<<< HEAD
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
=======
        random: false,
        seed: null,
        oneFailurePerSpec: false,
        failFast: false
      },
      clearContext: false
    },
    jasmineHtmlReporter: {
      suppressAll: true
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/angular-15-example'),
      subdir: '.',
<<<<<<< HEAD
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
=======
      reporters: [{ type: 'html' }, { type: 'text-summary' }]
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
<<<<<<< HEAD
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
=======
    browsers: ['ChromeHeadless'],
    singleRun: false,
    restartOnFileChange: true
  });
};
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
