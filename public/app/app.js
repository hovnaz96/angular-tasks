angular.module('app', ['ui.router', 'ngResource']);


angular.module('app').run(function ($http) {
    window.BASE_URL = 'http://api.angular-tasks.com/api';
    $http.defaults.headers.common.Authorization = localStorage.getItem('token');
})

angular.module('app').config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);