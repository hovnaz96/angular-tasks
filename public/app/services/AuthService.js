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