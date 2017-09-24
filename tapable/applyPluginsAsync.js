var Tapable = require('../node_modules/webpack/node_modules/tapable/lib/Tapable.js');

var tapable = new Tapable();

tapable.plugin('applyPluginsAsync', function(callback) {
  var delay = Math.random() * 1000;
  setTimeout(function() {
    console.log('this is plugin 1 with delay: ' + delay );
    callback();
  }, delay);
})

tapable.plugin('applyPluginsAsync', function(callback) {
  var delay = Math.random() * 1000;
  setTimeout(function() {
    console.log('this is plugin 2 with delay: ' + delay );
    callback();
  }, delay);
})

tapable.plugin('applyPluginsAsync', function(callback) {
  var delay = Math.random() * 1000;
  setTimeout(function() {
    console.log('this is plugin 3 with delay: ' + delay );
    callback();
  }, delay);
})

tapable.applyPluginsAsync('applyPluginsAsync', function() {
  console.log('done');
});

