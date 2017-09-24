var Tapable = require('../node_modules/webpack/node_modules/tapable/lib/Tapable.js');

var tapable = new Tapable();

tapable.plugin('applyPluginsAsyncWaterfall', function(value, callback) {
  var delay = Math.random() * 1000;
  setTimeout(function() {
    console.log('this is plugin 1 with delay: ' + delay );
    callback(null, value + '-1');
  }, delay);
})

tapable.plugin('applyPluginsAsyncWaterfall', function(value, callback) {
  var delay = Math.random() * 1000;
  setTimeout(function() {
    console.log('this is plugin 2 with delay: ' + delay );
    callback(null, value + '-2');
  }, delay);
})

tapable.plugin('applyPluginsAsyncWaterfall', function(value, callback) {
  var delay = Math.random() * 1000;
  setTimeout(function() {
    console.log('this is plugin 3 with delay: ' + delay );
    callback(null, value + '-3');
  }, delay);
})

tapable.applyPluginsAsyncWaterfall('applyPluginsAsyncWaterfall', '0', function(err, message) {
  console.log('the last message: ' + message);
  console.log('done');
});

