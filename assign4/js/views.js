(function(){
    'use strict'
    
    angular.module("MenuApp")
    .config(ViewsConfig);

    ViewsConfig.$inject=['$stateProvider','$urlRouterProvider'];

    function ViewsConfig($stateProvider,$urlRouterProvider)
    {
        //default link
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home',{
            url: '/',
            templateUrl: 'js/templates/home.template.html'
        })
        .state('categories',{
            url:'/categories',
            templateUrl: 'js/templates/categoriesView.template.html',
            controller: 'categoryController as myCtrl',
            resolve:
            {
                category: ['MenuDataServices', function(MenuDataServices){
                    return MenuDataServices.getAllCategories()
                        .then(function(res){ return res.data})
                        .catch(function(){console.log("something went wrong")});
                }]
            }
//            resolve:{
//            data: ['$http', function($http){
//                 return $http.get('https://davids-restaurant.herokuapp.com/categories.json')
//                 .then(function(res){return res.data;});
//                
//            }]
//        }
        })
        .state('items',{
            url:'/items/:itemId',
            templateUrl: 'js/templates/itemsView.template.html',
            controller: 'itemsController as myCtrl',
            resolve:
            {
                item:['$stateParams','MenuDataServices', function($stateParams,MenuDataServices){
                    console.log($stateParams.itemId);
                    return MenuDataServices.getItemForCategories($stateParams.itemId)
                        .then(function(res){ return res.data})
                        .catch(function(){console.log("something went wrong")});
                }]
            }
        });
    }
})();