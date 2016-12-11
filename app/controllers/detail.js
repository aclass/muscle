angular.module('myApp')

// ページ用のコントローラー
.controller('DetailCtrl', ['$scope', '$routeParams', 'dataDetailList', function($scope, $routeParams, dataDetailList){
  var members = dataDetailList();
  $scope.detail = members.member[($routeParams.memberNomber - 1)];
}]);
