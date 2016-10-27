(function(){
    'use strict';
    
    angular.module("public")
    .component("favoriteDish",{
        templateUrl: "src/public/favorite-dish/favoriteDish.html",
        bindings:{
            fdish: '<'
        }
    });
})();