(function(){
    'use strict'
    
    angular.module("public")
    .controller("ClientSignUpController", signUpController);

    signUpController.$inject = ['ClientServices'];

    function signUpController(ClientServices)
    {
        var signUpCtrl = this;
        signUpCtrl.formSubmitted = false;   //check if form is submitted
        signUpCtrl.success= false;          //will be used to see if client is registered
        signUpCtrl.fdish='';               //this is intro here to prevent the error caused by toUpperCase() i.e cant convert undefined


        signUpCtrl.submitForm = function(){
            signUpCtrl.formSubmitted=true;
            ClientServices.fname= signUpCtrl.fname;
            ClientServices.lname= signUpCtrl.lname;
            ClientServices.phone= signUpCtrl.phone;
            ClientServices.email= signUpCtrl.email;

            var promise= ClientServices.getFavoriteDish(signUpCtrl.fdish.toUpperCase());
            promise.then(function(res){
                
                signUpCtrl.message = "Your information has been saved.";
                signUpCtrl.success= true;
                ClientServices.signedUp = signUpCtrl.success;   //this is to check if the client is registered
                ClientServices.fdish =res.data;
            })
                .catch(function(){
                signUpCtrl.message="No such menu number exists.";
                signUpCtrl.success= false;
                ClientServices.signedUp = signUpCtrl.success;   //this is to check if the client is registered
                ClientServices.fdish = ''
            });
        }
    }
})();