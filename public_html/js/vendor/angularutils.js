define([], function() {
    return {
        bootstrap: function(appName) {
            angular.element(document).ready(function() {
                angular.bootstrap(document, [appName]);
            });
        }
    };
});
