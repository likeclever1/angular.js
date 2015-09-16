questApp.controller("AnswerController", function($scope, $http) {

    $scope.response = {};
    $scope.save = function(answer, answerForm) {
        console.log(answer);
        console.log(answerForm);
        if(answerForm.$valid) {
            $http.post("postAnswer.php", answer)
                .success(function(answ) {
                    $scope.response = answ;
                });
        }
    }

});