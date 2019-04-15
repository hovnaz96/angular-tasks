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