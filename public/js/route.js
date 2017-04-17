app.config(function($stateProvider) {

    $stateProvider.state({
        name: 'index1',
        url: '',
        controller: ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
            $scope.isAuthenicated = $rootScope.User;
            if ($scope.isAuthenicated) {
                $state.go('home');
            } else {
                $state.go('login');
            }
        }]
    });

    $stateProvider.state({
        name: 'login',
        url: '/login',
        templateUrl: '../html/login.html'
    });

});