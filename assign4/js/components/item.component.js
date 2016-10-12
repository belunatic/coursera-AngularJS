(function(){
    'use strict'
    
    angular.module("MenuApp")
    .component("items", {
        templateUrl:' js/templates/itemComponent.template.html',
        bindings:{
            items: '<'
        }
    });
})();