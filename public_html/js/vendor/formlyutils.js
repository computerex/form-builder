define([], function() {
    return {
        register_templates: function(app, templates, templatePath) {
            app.config(function(formlyConfigProvider) {
              for(var k = 0; k < templates.length; k++){
                formlyConfigProvider.setType({
                    name: templates[k],
                    templateUrl: templatePath+templates[k]+'.html'
                });
              }
            });
        }
    };
});
