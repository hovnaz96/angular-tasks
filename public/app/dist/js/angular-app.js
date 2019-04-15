const APP = angular.module('app', ['ui.router', 'ngResource']);


APP.run(function ($http, AuthManager, $transitions, $state, $rootScope) {
    window.BASE_URL = 'http://api.angular-tasks.com/api';
    AuthManager.checkAuth();

    $transitions.onStart({}, function(transition) {
        let requireAuth = transition.to().data ? transition.to().data.requiresAuth : null;

        if(requireAuth === true && !AuthManager.isAuthenticated()) {
            return $state.target('login');
        } else if(requireAuth === false && AuthManager.isAuthenticated()) {
            return $state.target('home');
        } else return true;
    });

    $rootScope.logout = function (event) {
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        AuthManager.checkAuth();
        $state.go('home');
    }
})

APP.config(['$locationProvider',  function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);


APP.config(function Config($httpProvider) {
        $httpProvider.interceptors.push(function() {
            // let state = $injector.get('$state');
            return {
                'request': function(config) {
                    config.headers['Authorization'] = localStorage.getItem('token');
                    return config;
                },

                'response': function(response) {
                    if(response.status === 403) {
                        // state.go('login');
                    }
                    // same as above
                    return response;
                }
            };
        });
    });
angular.module('app')
    .controller('AccountIndexController', function (AuthService) {
        console.log(123);
        AuthService.me();
    });
angular.module('app')
    .controller('AuthLoginController', function ($scope, AuthService, $state, AuthManager) {
        $scope.user = {};

        $scope.login = function (event) {
            event.preventDefault();
            AuthService.login($scope.user, (res) => {
                AuthManager.setToken(res.token);
                AuthService.me({}, (res) => {
                    localStorage.setItem('user', JSON.stringify(res.user));
                    AuthManager.checkAuth();
                    $state.go('account');
                })
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
                },
                data : {
                    requiresAuth : true
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
                },
                data : {
                    requiresAuth : false
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
                },
                data : {
                    requiresAuth : false
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
                    'header': {
                        templateUrl: '/modules/_partials/_header.html',
                    },
                    'main@': {
                        templateUrl: '/modules/Home/views/index.html',
                        controller : 'HomeIndexController'
                    },
                    'footer': {
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
            },
            setToken(token) {
                localStorage.setItem('token', token);
            },
            user() {
                return JSON.parse(localStorage.getItem('user'));
            },
            checkAuth() {
                $rootScope.user = this.user();
                $rootScope.isAuthenticated = this.isAuthenticated();
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
            },
            me : {
                url   : `${BASE_URL}/me`,
                method: 'GET'
            }
        });
}]);