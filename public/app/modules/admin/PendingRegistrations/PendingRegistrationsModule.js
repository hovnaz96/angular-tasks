angular.module('app')
    .controller('PendingRegistrationsIndexController', function (PendingRegistrationService, $scope, toastr) {
        $scope.status = 'pending';
        $scope.data = {};

        $scope.getData = function (page) {
            PendingRegistrationService.get({status : $scope.status, page : page}, (res) => {
                $scope.data = res.users;
            }, (err) => {})
        };

        $scope.getData();


        $scope.approve = function (userID) {
            if(confirm('Are you sure you want approve this user?')) {
                PendingRegistrationService.approve({user_id : userID}, (res) => {
                    toastr.success('Successfully Approved');
                    $scope.getData(1);
                }, (err) => {
                    toastr.error('Error in approving.');
                })
            }
        }
    });