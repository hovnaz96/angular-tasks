angular.module('app')
    .factory('AuthManager', ['$rootScope', function($rootScope) {
        return {
            isAuthenticated() {
                return localStorage.getItem('token') !== null;
            }
        }
    }]);