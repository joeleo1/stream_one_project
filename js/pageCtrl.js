angular.module('RouteControllers', [])

.controller('videoCtrl', function($scope) {

  $scope.playPause = function() {

  var myVideo = document.getElementById('vid');
  var hide_overlay = document.getElementById('vid_overlay');

  if (myVideo.paused) {
      myVideo.play();
      hide_overlay.style.opacity= "0";
    }

  else {
      myVideo.pause();
      hide_overlay.style.height = "100%";
  }

  }

  $scope.vidCtrl = function() {

    var vdCon = document.getElementById('vid');

      if (vdCon.hasAttribute("controls")) {
          vdCon.removeAttribute("controls")

       } else {
        vdCon.setAttribute("controls","controls");
    }
  }



});
