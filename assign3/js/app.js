(function(){

    angular.module("NarrowItDownApp",[])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .constant('MenuUrl','https://davids-restaurant.herokuapp.com/menu_items.json')
    .directive('foundItems',foundItems);
    
    //Controller
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController ( MenuSearchService)
    {
        var myCtrl = this;
        myCtrl.narrowItDown= MenuSearchService.getMatchedMenuItems;
        
        myCtrl.found= MenuSearchService.foundItems;
        
        myCtrl.count= MenuSearchService.count;
        
        myCtrl.removeItem = function(x){
            MenuSearchService.removeItem(x);
        };
        
    }
    
    //Service
    MenuSearchService.$inject = ['$http', 'MenuUrl']
    function MenuSearchService($http, MenuUrl)
    {
        var list = this;
        
        list.foundItems=[];
        
        list.count=[];
        
        
        list.getMatchedMenuItems = function(x){
            list.foundItems.length = 0;
             $http.get(MenuUrl)
                  .then(function(result){
                //store the result into menuObj
                var menuObj = result.data;
                //get the matched results
                 //check if x is empty
                 if( x ==="")
                    {
                        list.foundItems.length=0;
                    }
                 else
                 {
                    for(var y=0; y < menuObj.menu_items.length; y++)
                    {

                        if(menuObj.menu_items[y].description.includes(x))
                        {
                            list.foundItems.push(menuObj.menu_items[y]);
                        }
                    }
                     //this is added so as to help in adding the phrase "Nothing Found"
                     list.count.length =1;
                 }
                
                }).catch(function (error){
                     console.log("Something is Major wrong");
                 });
             
        }
        
        list.removeItem = function(x){
            list.foundItems.splice(x,1);
        }
                    
    }
    
    //Derictive
    function foundItems()
    {
        var ddo = {
            scope:{
            found: '<foundItem',
            onRemove: '&'
            },
            templateUrl: 'foundItems.html',
        }
        
        return ddo;
    }
        
               
})()