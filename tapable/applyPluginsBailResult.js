var Tapable = require('../node_modules/webpack/node_modules/tapable/lib/Tapable.js');

var tapable = new Tapable();

tapable.plugin('applyPluginsBailResult', function() {
  console.log('this is plugin 1');
})

tapable.plugin('applyPluginsBailResult', function() {
  console.log('this is plugin 2');
  return 2;
})

tapable.plugin('applyPluginsBailResult', function() {
  console.log('this is plugin 3');
})

var last = tapable.applyPluginsBailResult('applyPluginsBailResult');
console.log('the last value: ' + last);

