var Tapable = require('../node_modules/webpack/node_modules/tapable/lib/Tapable.js');

var tapable = new Tapable();

tapable.plugin('applyPluginsWaterfall', function(value) {
  console.log('this is plugin 1', ' i get value: ' + value++);
  return value;
})

tapable.plugin('applyPluginsWaterfall', function(value) {
  console.log('this is plugin 2', ' i get value: ' + value++);
  return value;
})

tapable.plugin('applyPluginsWaterfall', function(value) {
  console.log('this is plugin 3', ' i get value: ' + value++);
  return value;
})

var last = tapable.applyPluginsWaterfall('applyPluginsWaterfall', 0);
console.log('the last value: ' + last);
