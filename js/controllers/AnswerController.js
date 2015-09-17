myApp.controller("AnswerController", function($scope, $http, $location, $templateCache) {

    $scope.answer = null;

    $scope.$on('$routeChangeStart', function(event, next, current) {
        if(typeof(current) !== 'undefined') {
            $templateCache.remove(next.templateUrl);
        }
    });

    $scope.$on("$routeChangeSuccess", function () {
        var id = $routeParams["id"];
        if(id!=='undefined'){

            $http({method:'GET', url:'getAnswer.php', params: {'id':id}}).
                success(function(data) {
                    $scope.answer = data;
                });
        }
    });

    $scope.save = function(answer, answerForm) {
        if(answerForm.$valid) {
            $http.post("postAnswer.php", answer).success(function() {
                $location.path("question");
            });
        }
    }
});