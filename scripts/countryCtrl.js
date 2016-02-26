angular.module('myApp').controller('countryCtrl', ['$scope', function ($scope) {
	$scope.country = {
		name: 'Ukraine',
		area: '603 628',
		population: '42 825 883',
		capital: {
			name: 'Kiev',
			population : "3 000 000"
		}
	};
}]);