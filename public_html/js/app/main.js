define(['angularutils','formlyutils'], function(angularutils, formlyutils) {
    var app = angular.module('FormBuilder', ['formly']);
    angularutils.bootstrap('FormBuilder');
    formlyutils.register_templates(app, ['textinput'], '/templates/');
    app.controller('mainController', ['$scope', '$http', function($scope, $http){
      var vm = this;
      vm.fields = [{
          key: 'text',
          type: 'textinput', 
          templateOptions: {
            label: 'text input',
            placeholder: 'placeholder'
          }
      }];
      console.log("from angualr");
    }]);
});
