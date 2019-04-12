angular.module('app', ['ui.router', 'ngResource']);


angular.module('app').run(function ($http, AuthManager) {
    window.BASE_URL = 'http://api.angular-tasks.com/api';
    $http.defaults.headers.common.Authorization = localStorage.getItem('token');

    console.log(AuthManager.isAuthenticated());
})

angular.module('app').config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);
angular.module('app')
    .controller('AccountIndexController', function () {

    });
angular.module('app')
    .controller('AuthLoginController', function ($scope, AuthService, $state) {
        $scope.user = {};

        $scope.login = function (event) {
            event.preventDefault();
            AuthService.login($scope.user, (res) => {
                localStorage.setItem('token', res.token);
                $state.go('account');
            })
        }
    });


angular.module('app')
    .controller('AuthRegisterController', function ($scope, AuthService) {
        $scope.days = new Array(31);
        $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        $scope.years = new Array(110);
        $scope.user = {

        }
        
        $scope.register = ($event) => {
            $event.preventDefault();
            $scope.user.date_of_birth = [$scope.user.month, $scope.user.day, $scope.user.year].join(' ');
            AuthService.register($scope.user, (res) => {

            },  (err) => {

            })
        }
    });
angular.module('app')
    .controller('HomeIndexController', function () {

    });
angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'account',
                url: '/account',
                views: {
                    'header@': {
                        templateUrl: '/modules/_partials/_header.html',
                    },
                    'main@': {
                        templateUrl: '/modules/Account/views/index.html',
                        controller : 'AccountIndexController'
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
angular.module('app')
    .factory('AuthManager', ['$rootScope', function($rootScope) {
        return {
            isAuthenticated() {
                return localStorage.getItem('token') !== null;
            }
        }
    }]);
angular.module('app')
    .factory('AuthService', ['$resource', function($resource) {
        return $resource(null, {id: '@id'}, {
            login : {
                url   : `${BASE_URL}/auth/login`,
                method: 'POST'
            },
            register: {
                url   : `${BASE_URL}/auth/register`,
                method: 'POST'
            }
        });
}]);