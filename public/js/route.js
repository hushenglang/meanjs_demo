app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'default',
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

    $stateProvider.state({
        name: '404',
        url: '/404',
        templateUrl: '../html/404.html'
    });

    $urlRouterProvider.otherwise('/404');
});