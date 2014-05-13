module.exports = require('broccoli-dist-es6-module')('lib', {
  global: 'ic.data',
  packageName: 'ic-data',
  main: 'main',
  shim: {
    'ember-data': 'DS'
  }
});

