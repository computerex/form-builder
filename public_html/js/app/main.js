define(['angularutils', './components/formlyutil', './components/componentmanager'], function(angularutils, formlyutil, componentmanager) {
    var formlyTemplates = ['textinput'];
    var app = angular.module('FormBuilder', ['formly']).config(function(formlyConfigProvider) {
      formlyutil.register_templates(formlyConfigProvider, formlyTemplates, '/templates/');
    });
    angularutils.bootstrap('FormBuilder');
    componentmanager.init(formlyTemplates);
    app.controller('mainController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
        $scope.formlyTemplates = formlyTemplates;
        var vm = this;
        vm.fields = [{
            key: 'text',
            type: 'textinput',
            templateOptions: {
                label: 'text input',
                placeholder: 'placeholder'
            }
        },{
            key: 'text2',
            type: 'textinput',
            templateOptions: {
                label: 'text input',
                placeholder: 'placeholder'
            }
        }];
        $timeout(function(){
          for (var k = 0; k < vm.fields.length; k++)
              formlyutil.init(vm.fields[k]);
        }, 1000);
        console.log("from angualr");
    }]);
});
