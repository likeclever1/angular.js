console.log(angular.version);
var myApp = angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/question',
            {
                templateUrl: 'views/question.html',
                controller: 'QuestionController'
            });

        $routeProvider.when('/answer',
            {
                templateUrl: 'views/answer.html',
                controller: 'AnswerController'
            });

        $routeProvider.when('/edit/:id',
            {
                templateUrl: "views/answer.html",
                controller: "AnswerController"
            });

        $routeProvider.when('/edit/:id/:data*',
            {
                templateUrl: "views/answer.html",
                controller: 'AnswerController'
            });
        $routeProvider.otherwise({redirectTo: '/question'});
    });