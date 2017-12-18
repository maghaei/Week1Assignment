(function () {
  'use strict';
  angular.module('eatApp', [])
  .controller('eatAppController', function ($scope) {
    $scope.items="";
    $scope.message="";
    $scope.checkItems = function () {
      var eatItems = $scope.items;
      if (eatItems=="") $scope.message = "Please enter data first!";
      else {
        var numberOfItems = parsString(eatItems, ',');
        if (numberOfItems <= 3)
        $scope.message = "Enjoy!";
        else {
          $scope.message = "Too Much!";
        }
      }
    };

    function parsString(stringToParse, separator) {
      var itemsArray = stringToParse.split(separator);
      return itemsArray.length;
    };
  });
})();
