
    'use strict';

    function appConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'features/home/homeView.html',
                controller: 'HomeController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    angular
        .module('app')
        .config(appConfig);

