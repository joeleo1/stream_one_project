angular.module('bdSite')

    .controller('headerCtrl', function($scope) {


      $scope.myFunc1 = function() {

      var img = document.getElementById('burger').src;

      if (img.indexOf('navicon.svg')!=-1) {
          document.getElementById('burger').src  = 'content/images/cancel.svg';
      }
      else {
          document.getElementById('burger').src = 'content/images/navicon.svg';
      }

      $scope.myFunc2 = function() {

        var toggleOpen = document.getElementById('toggle');
        toggleOpen.classList.toggle('open');

      }
    }
});
