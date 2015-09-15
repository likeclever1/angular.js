myApp = angular.module("myApp");

myApp.controller("QuestionCtrl", function($scope) {

    $scope.question = {
        text: 'Какой js-фреймворк лучше использовать ?',
        author: 'Иван Иванов',
        date: '20/10/2013',
        answers: [
            {
                text: 'AngularJS!',
                author: 'Вова Сидоров',
                date: '21/10/2013',
                rate: 2
            },
            {
                text: 'AngularJS лучше всех!',
                author: 'Вова Сидоров',
                date: '24/10/2013',
                rate: 2
            },
            {
                text: 'Я бы использовал knockout',
                author: 'Неизвестный',
                date: '23/10/2013',
                rate:0
            },
            {
                text: 'Backbone Однозначно!',
                author: 'Павел Малый',
                date: '20/10/2013',
                rate: 1
            }
        ]
    };

    $scope.sortparam='rate';

    $scope.voteUp = function( e, answer ) {
        e.preventDefault();
        answer.rate++;
        return false;
    };

    $scope.voteDown = function( e, answer ) {
        e.preventDefault();
        answer.rate--;
    };

    $scope.questColorClass = 'questcolor';
    $scope.changeClass = function( e ) {
        $scope.questColorClass = e.type == "mouseover" ? "questselectedcolor" : "questcolor";
    }
});