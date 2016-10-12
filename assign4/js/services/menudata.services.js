(function(){
    'use strict'
    angular.module("data")
    .service("MenuDataServices", MenuDataServices);

    MenuDataServices.$inject = ['$http']
    function MenuDataServices($http)
    {
        var menuList = this;

        menuList.getAllCategories = function(){
            return $http.get('https://davids-restaurant.herokuapp.com/categories.json');
        }

        menuList.getItemForCategories = function(x){
            var url = 'https://davids-restaurant.herokuapp.com/menu_items.json?category='+x;
            return $http.get(url);
        }
        
//        add category into an array
        menuList.ArrCategories = function(x){
            
            var result = [];
            
            for(var i=0; i < x.menu_items.length; i++)
                {
                    result.push(x[i].menu_items.category);
                }
            
        }
        
//        add specified items into an array
        menuList.ArrItems = function(x,y){
            
            var result = [];
            
            for(var i=0; i < x.menu_items.length; i++)
                {
                    if(x.menu_items.short_name === y)
                    result.push(x[i].menu_items);
                }
        }
    }
})();