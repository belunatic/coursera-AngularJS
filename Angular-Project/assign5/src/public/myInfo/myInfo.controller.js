angular.module("public")
.controller("myInfoController", myInfoController);

myInfoController.$inject =[ 'ClientServices','registered'];
function myInfoController( ClientServices, registered)
{
    var myInfoCtrl = this;
    
    myInfoCtrl.registered = registered;
    
    myInfoCtrl.fname=ClientServices.fname;
    myInfoCtrl.lname=ClientServices.lname;
    myInfoCtrl.phone=ClientServices.phone;
    myInfoCtrl.email=ClientServices.email;
    myInfoCtrl.fdish=ClientServices.fdish;
}