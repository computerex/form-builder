define(function(require){
  return {
    init: function(templates){
      for(var k = 0; k < templates.length; k++){
        console.log("loading component: " + templates[k]);
        require(['./'+templates[k]], function(mod){
        });
      }
    },
    load: function(mod){
      console.log("componentmanager: loading " + mod);
      var lib = require('./'+mod);
      return lib;     
    }
  };
});
