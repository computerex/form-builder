define(function(require){
  return {
    init: function(templates, then, context){
      var modlist = [];
      for(var k = 0; k < templates.length; k++){
        modlist.push('./'+templates[k]);
      }
      require(modlist, function(){
        then.call(context);
      });
    },
    load: function(mod){
      console.log("componentmanager: loading " + mod);
      var lib = require('./'+mod);
      return lib;     
    }
  };
});
