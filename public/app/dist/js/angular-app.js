angular.module('app', ['ui.router']);

angular.module('app').config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);
angular.module('app')
    .controller('AuthLoginController', function () {

    });


angular.module('app')
    .controller('AuthRegisterController', function ($scope) {
        $scope.days = new Array(31);
        $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        $scope.user = {
            date_of_birth : {}
        }
        
        $scope.register = ($event) => {
            $event.preventDefault();
            console.log($scope.user);
        }
    });
angular.module('app')
    .controller('HomeIndexController', function () {

    });
angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'login',
                url: '/login',
                views: {
                    'header@': {
                        templateUrl: '/modules/_partials/_header.html',
                    },
                    'main@': {
                        templateUrl: '/modules/Auth/views/login.html',
                        controller : 'AuthLoginController'
                    },
                    'footer@': {
                        templateUrl: '/modules/_partials/_footer.html',
                    }
                }
            })
            .state({
                name: 'register',
                url: '/register',
                views: {
                    'header@': {
                        templateUrl: '/modules/_partials/_header.html',
                    },
                    'main@': {
                        templateUrl: '/modules/Auth/views/register.html',
                        controller : 'AuthRegisterController'
                    },
                    'footer@': {
                        templateUrl: '/modules/_partials/_footer.html',
                    }
                }
            })
    });
angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'home',
                url: '/',
                views: {
                    'header@': {
                        templateUrl: '/modules/_partials/_header.html',
                    },
                    'main@': {
                        templateUrl: '/modules/Home/views/index.html',
                        controller : 'HomeIndexController'
                    },
                    'footer@': {
                        templateUrl: '/modules/_partials/_footer.html',
                    }
                }
            })
    });