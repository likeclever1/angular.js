myApp.controller("StudentController", function($scope) {

	$scope.student = {

		firstName: "Yuriy",
		lastName: 'Berezovskiy',

		fullName: function() {
			return $scope.student.firstName + " " + $scope.student.lastName;
		},

		fees: 500,
		subjects:[
			{name:'Physics',marks:70},
			{name:'Chemistry',marks:80},
			{name:'Math',marks:65},
			{name:'English',marks:75},
			{name:'Hindi',marks:67}
		],
	}
});