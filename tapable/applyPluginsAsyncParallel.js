var Tapable = require('../node_modules/webpack/node_modules/tapable/lib/Tapable.js');

var tapable = new Tapable();

var totalDelay = 0;
tapable.plugin('applyPluginsParallel', function(callback) {
  var delay = Math.random() * 1000;
  setTimeout(function() {
    console.log('this is plugin 1 with delay: ' + delay );
    totalDelay += delay;
    callback();
  }, delay);
})

tapable.plugin('applyPluginsParallel', function(callback) {
  var delay = Math.random() * 1000;
  setTimeout(function() {
    console.log('this is plugin 2 with delay: ' + delay );
    totalDelay += delay;
    callback();
  }, delay);
})

tapable.plugin('applyPluginsParallel', function(callback) {
  var delay = Math.random() * 1000;
  setTimeout(function() {
    console.log('this is plugin 3 with delay: ' + delay );
    totalDelay += delay;
    callback();
  }, delay);
})

tapable.applyPluginsParallel('applyPluginsParallel', function(err) {
  console.log('totalDelay: ' + totalDelay);
  console.log('done');
});

