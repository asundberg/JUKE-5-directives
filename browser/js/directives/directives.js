'use strict';

juke.directive('sideBar', function () {
  return {
    restrict: 'E',
    templateUrl: '/js/directives/templates/sidebar.html'
  };
});

juke.directive('footerPlayer', function (PlayerFactory) {
  return {
    restrict: 'E',
    templateUrl: '/js/directives/templates/footer.html',
    link: function (scope, element, attrs) {
      angular.extend(scope, PlayerFactory); // copy props from param2 to param1

      scope.handleProgressClick = function (evt) {
        PlayerFactory.seek(evt.offsetX / evt.currentTarget.scrollWidth);
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

      // scope.artist = theArtist;
    }
  };
});

juke.directive('doubleClick', function (PlayerFactory) {
  return {
    restrict: 'A',
    scope: {
      doubleClick: '&'
    },
    link: function (scope, element) {
      angular.extend(scope, PlayerFactory);
      element.on('dblclick', function () {
        scope.doubleClick();
      });
    }
  };
});
