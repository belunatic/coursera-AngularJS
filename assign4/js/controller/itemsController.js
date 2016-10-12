angular.module("MenuApp")
.controller('itemsController', itemsController);

itemsController.$inject = [ 'item'];

function itemsController( item )
{
    var myCtrl = this;
    
    myCtrl.items = item.menu_items;
}