questApp.controller("QuestionController", function QuestionController($scope, dataService, $http) {

    var promiseObj = dataService.getData();
    console.log(promiseObj);

    promiseObj.then(function(value) {
        $scope.question = value;
    });

    $scope.voteUp = function(e, answer) {
        console.log(answer);
        $http({
            method: 'GET',
            url: 'setAnswer.php',
            params: {
                'id': answer.id,
                'up': true
            }
        })
        .success(function(data) {
            answer.rate++;
            console.log(data);
        })
    };

    $scope.voteDown = function(e, answer) {
        $http({
            method: 'GET',
            url: 'setAnswer.php',
            params: {
                'id': answer.id,
                'up': false
            }
        })
        .success(function(data) {
            answer.rate--;
            console.log(data);
        })
    };
});