angular.module("MenuApp")
.controller('categoryController', categoryController);

categoryController.$inject = [ 'category'];

function categoryController( category )
{
    var myCtrl = this;
    
//    data is already in object form
//    console.log(category);
    myCtrl.category = category;
    
    //myCtrl.category = [1,2,3,2,6,4,3,2,1];
}