angular.module('RouteControllers', [])

.controller('homeCtrl', function($scope) {


  $scope.playPause = function() {

  var myVideo = document.getElementById('vid');

  if (myVideo.paused)
      myVideo.play();

  else {
      myVideo.pause(); 
  }


}
});
