var Tapable = require('../node_modules/webpack/node_modules/tapable/lib/Tapable.js');

var tapable = new Tapable();

tapable.plugin('applyPlugins', function() {
  console.log('this is plugin 1');
})

tapable.plugin('applyPlugins', function() {
  console.log('this is plugin 2');
})

tapable.plugin('applyPlugins', function() {
  console.log('this is plugin 3');
})

tapable.applyPlugins('applyPlugins');
