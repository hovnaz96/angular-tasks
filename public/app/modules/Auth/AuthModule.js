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