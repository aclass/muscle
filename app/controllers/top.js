angular.module('myApp')

// ページ用のコントローラー
.controller('TopCtrl', ['$scope', 'charactorList', function($scope, charactorList){
	// キャラクターデータ取得
	$scope.data = charactorList();
}]);
