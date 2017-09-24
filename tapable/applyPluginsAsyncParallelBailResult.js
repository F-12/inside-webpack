var Tapable = require('../node_modules/webpack/node_modules/tapable/lib/Tapable.js');

var tapable = new Tapable();

var totalDelay = 0;
tapable.plugin('applyPluginsParallelBailResult', function(callback) {
  var delay = Math.random() * 1000;
  console.log('this is plugin 1 with delay: ' + delay );
  setTimeout(function() {
    totalDelay += delay;
    callback();
  }, delay);
})

tapable.plugin('applyPluginsParallelBailResult', function(callback) {
  var delay = Math.random() * 1000;
  console.log('this is plugin 2 with delay: ' + delay );
  setTimeout(function() {
    totalDelay += delay;
    var time = Date.now();
    console.log('plugin 2 returns at time: '+ time);
    callback(null, time);
  }, delay);
})

tapable.plugin('applyPluginsParallelBailResult', function(callback) {
  var delay = Math.random() * 1000;
  console.log('this is plugin 3 with delay: ' + delay );
  setTimeout(function() {
    totalDelay += delay;
    var time = Date.now();
    console.log('plugin 3 returns at time: '+ time);
    callback(null, time);
  }, delay);
})

tapable.applyPluginsParallelBailResult('applyPluginsParallelBailResult', function(err, value) {
  console.log('totalDelay: ' + totalDelay);
  console.log('the last value: ' + value);
  console.log('done');
});
