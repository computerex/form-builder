define(['./componentmanager'], function(componentmanager) {
  function getmethods(module){
    return Object.getOwnPropertyNames(module).filter(function (p) {
        return typeof module[p] === 'function';
    });
  }
    return {
        register_templates: function(formlyconfigprovider, templates, templatepath) {
            for(var k = 0; k < templates.length; k++){
              formlyconfigprovider.setType({
                  name: templates[k],
                  templateUrl: templatepath+templates[k]+'.html'
              });
            }
        },
        init: function(field){
          var mod = componentmanager.load(field.type);
          var methods = getmethods(mod);
          for(var k = 0; k < methods.length; k++){
            field.data[methods[k]] = mod[methods[k]];
          }
          field.data.init();
        }
    };
});
