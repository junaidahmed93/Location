angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

  })

  .controller('browseController', function ($scope) {
    console.log('brower Controller');
  })
  .controller('tryController', function ($scope) {
    console.log('hi');
  })
  .controller('loginController', function ($scope) {
    console.log('login');
    $scope.login = function () {
      var ref = new Firebase("https://locationbchat.firebaseio.com/");
      ref.authWithOAuthPopup("facebook", function (error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });

      
    }

  })