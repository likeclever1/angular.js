questApp.controller("AnswerController", function($scope) {

    $scope.save = function(answer, answerForm) {
        if(answerForm.$valid) {
            alert(answer.author + ", Ваш ответ сохранён!");
        } else {
            alert("Введите корректные данные!");
        }
    }

});