(function(){
    'use strict'
    angular.module("public")
    .service("ClientServices", ClientServices);

    ClientServices.$inject=['$http','ApiPath'];
    function ClientServices($http,ApiPath)
    {
        var client = this;

        client.fname='';
        client.lname='';
        client.phone='';
        client.email='';
        client.signedUp;
        client.fdish='';
        client.favoriteDish='';

        client.getFavoriteDish = function (dish) {

        return $http.get(ApiPath + '/menu_items/'+ dish +'.json')
        }
        
        client.registered = function(){
            return client.signedUp;
        }
      }
})();
            