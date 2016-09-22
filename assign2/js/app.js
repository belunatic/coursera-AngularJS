(function(){
    'use strict';
    
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyShoppingController', ToBuyShoppingController )
    .controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    //Buy List
    ToBuyShoppingController.$inject=[ '$scope', 'ShoppingListCheckOffService'];
    function ToBuyShoppingController( $scope, ShoppingListCheckOffService)
    {
        $scope.buy = ShoppingListCheckOffService.buyingList;
        
        $scope.bought = ShoppingListCheckOffService.bought;
        
    }
    
    AlreadyBoughtShoppingController.$inject=['$scope','ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController($scope,ShoppingListCheckOffService)
    {
        $scope.alreadyBought = ShoppingListCheckOffService.boughtList;
    }
    
    //service
    function ShoppingListCheckOffService()
    {
        var list = this;
        
        list.buyingList = [
            { item_quantity:'20', item_name:'Cookies'},
            { item_quantity:'1', item_name:'Milk'},
            { item_quantity:'12', item_name:'Water Bottle'},
            { item_quantity:'2', item_name:'Cake'},
            { item_quantity:'1', item_name:'Ice Cream'}
            ];
        
        list.boughtList = [];
        
        list.bought= function(x)
        {   
            //add to boughtList
            list.boughtList.push(list.buyingList[x]);
            //remove from buyingList
            list.buyingList.splice(x,1);
        }
        
    }
        
            
        
    
})();