'use strict';

juke.directive('sideBar', function () {
  return {
    restrict: 'E',
    templateUrl: '/js/directives/templates/sidebar.html'
  };
});

juke.directive('footerPlayer', function (PlayerFactory, SongFactory) {
  return {
    restrict: 'E',
    templateUrl: '/js/directives/templates/footer.html',
    link: function (scope, element, attrs) {
      angular.extend(scope, PlayerFactory); // copy props from param2 to param1
      scope.toggle = function () {
        if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
        else PlayerFactory.resume();
      };
      scope.getPercent = function () {
        return PlayerFactory.getProgress() * 100;
      };
    }
  };
});

juke.directive('albumList', function () {
  return {
    restrict: 'E',
    templateUrl: '/js/directives/templates/albumList.html',
    scope: {
      albums: '='
    }
  };
});

juke.directive('songList', function (PlayerFactory) {
  return {
    restrict: 'E',
    templateUrl: '/js/directives/templates/songList.html',
    scope: {
      songs: '='
    },
    link: function (scope, element, attrs) {
      angular.extend(scope, PlayerFactory); // copy props from param2 to param1
    }
  };
});

juke.directive('doubleClick', function (PlayerFactory, SongFactory) {
  return {
    restrict: 'A',
    scope: {
      doubleClick: '&' // The '&' takes what follows 'onDblClick=' and puts it on our empty isolate scope.
    },
    link: function (scope, element) {
      angular.extend(scope, PlayerFactory);
      angular.extend(scope, SongFactory);
      element.on('dblclick', function () {
        scope.doubleClick();
      });
    }
  };
});
