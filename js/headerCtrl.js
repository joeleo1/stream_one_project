angular.module('bdSite')

.controller('headerCtrl', ["$scope", "$window", function($scope, $window) {

 $scope.menuIcon = function() {

   var img = document.getElementById('burger').src;

   if (img.indexOf('navicon.svg') != -1) {
    document.getElementById('burger').src = 'content/images/cancel.svg';
   } else {
    document.getElementById('burger').src = 'content/images/navicon.svg';
   }

   $scope.openClose = function() {

    var toggleOpen = document.getElementById('toggle');
    toggleOpen.classList.toggle('open');

   }
 }

}]);
