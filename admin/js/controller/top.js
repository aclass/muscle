// モジュールの宣言
var adminAppModule = angular.module('adminApp', []);

// コントローラ
adminAppModule.controller('adminMainCtrl', function() {
  // データ
  this.data = [
    {"name":"yoshitani", "age":26},
    {"name":"ozawa", "age":25}
  ]
});
