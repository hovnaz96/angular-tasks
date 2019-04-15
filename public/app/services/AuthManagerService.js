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