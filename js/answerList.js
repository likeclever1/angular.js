questApp.directive("answerList", function() {
    return {

        link: function (scope, element, attrs) {
            scope.data = scope[attrs["answerList"] || attrs["source"]];
            console.log(scope);
        },
        restrict: "AE",
        templateUrl: "templates/answersTemplate.html",
        transclude: true
    }
});