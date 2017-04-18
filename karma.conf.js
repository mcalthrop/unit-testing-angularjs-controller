module.exports = (config) => {
  config.set({
    basePath: '',
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'js/**/*.js',
      'spec/**/*.spec.js'
    ],
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ],
    singleRun: true
  });
};
