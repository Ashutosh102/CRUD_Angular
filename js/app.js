var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })
        .state('add', {
            url: '/add',
            templateUrl: 'partials/add.html',
            controller: 'addCtrl'
        })
        .state('edit', {
            url: '/edit/{member:json}',
            templateUrl: 'partials/edit.html',
            controller: 'editCtrl'
        })
        .state('delete', {
            url: '/delete/{member:json}',
            templateUrl: 'partials/delete.html',
            controller: 'deleteCtrl'
        })
      
});
