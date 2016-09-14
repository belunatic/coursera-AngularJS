(function(){
    'use strict';
    
    angular.module('LunchCheck',[]).controller('LunchCheckController', LunchTime );
    
    //inject the scope. This is done because of minification
    LunchTime.$inject=['$scope'];
    
    function LunchTime($scope)
    {
        $scope.emptyItem ='do NOT consider an empty item';
        $scope.items='';        //intiate the items
        var totalItem =0;
        var message;
        
        
        $scope.printMessage = function()
        {
            totalItem = getTotalItems($scope.items); // this will always give you the current info
            message = getMessage(totalItem);
            $scope.message = message[0];
            $scope.color = message[1];
        }
        
        
    }
    
    // function to get total items
    function getTotalItems(x)
    {
        var itemArr = x.trim().split(',');
        var count = 0;
        
        for( var x =0; x < itemArr.length; x++)
        {
            if( itemArr[x] !== "" && itemArr[x] !== ' ')
            {
                count++
            }
        }
        
        return count;
    }
    
    //function get the message
    function getMessage(x)
    {
        if( x === 0)
        {
            return ['Please enter data first', 'red'];
        }
        else if( x >0 && x <= 3)
        {
            return ['Enjoy!', 'green'];
        }
        else
        {
            return ['Too Much!', 'green'];
        }
    }
        
    
})();