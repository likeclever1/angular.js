var questApp = angular.module('questApp', []);

questApp.controller("QuestionController", function($scope) {

    $scope.question = {
        text: "Какой js-фреймворк лучше использовать ?",
        author: "Юрий Березовский",
        date: "11/10/2015",
        answers: [
            {
                text: "AngularJS",
                author: "Александр Пустомельник",
                date: "10/10/2014",
                rate: 5
            },
            {
                text: "KnockoutJS",
                author: "Сергей Овдиенко",
                date: "10/02/2013",
                rate: 4
            },
            {
                text: "Luana JS",
                author: "Виктор Угрин",
                date: "10/10/2010",
                rate: 5
            },
            {
                text: 'фигасе квестшен',
                author: 'Неизвестный',
                date: '22/10/2013',
                rate:0
            }
        ]
    };

    $scope.voteUp = function(e, answer) {
        debugger;
        answer.rate++;
    };

    $scope.voteDown = function(e, answer) {
        answer.rate--;
    };
});