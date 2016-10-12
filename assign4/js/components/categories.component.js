(function(){
    'use strict'

    angular.module("MenuApp")
    .component("categories", {
        templateUrl:' js/templates/categoriesComponent.template.html',
        bindings:{
            category: '<'
        }
    });
})();