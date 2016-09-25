'use strict';

angular.module('myApp.view1', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', '$uibModal', function($scope, $http, $uibModal) {
	$('map').imageMapResize();
	$scope.selectedBuilding = {};

	$http.get('/buildings.json').then(function(response) {
		$scope.buildings = response.data.buildings;

		var buildingA = $scope.buildings[0];
		var buildingB = $scope.buildings[1];
		var buildingC = $scope.buildings[2];
		var buildingD = $scope.buildings[3];
		var buildingE = $scope.buildings[4];
		var buildingF = $scope.buildings[5];
		var buildingG = $scope.buildings[6];
		var buildingH = $scope.buildings[7];
		var buildingI = $scope.buildings[8];
		var buildingL = $scope.buildings[9];
		var buildingP = $scope.buildings[10];

		$('#buildinga').click(function() {
			$scope.selectedBuilding = buildingA;
			$scope.showModal();
		});

		$('#buildingb').click(function() {
			$scope.selectedBuilding = buildingB;
			$scope.showModal();
		});

		$('#buildingc').click(function() {
			$scope.selectedBuilding = buildingC;
			$scope.showModal();
		});

		$('#buildingd').click(function() {
			$scope.selectedBuilding = buildingD;
			$scope.showModal();
		});

		$('#buildinge').click(function() {
			$scope.selectedBuilding = buildingE;
			$scope.showModal();
		});

		$('#buildingf').click(function() {
			$scope.selectedBuilding = buildingF;
			$scope.showModal();
		});

		$('#buildingg').click(function() {
			$scope.selectedBuilding = buildingG;
			$scope.showModal();
		});

		$('#buildingh').click(function() {
			$scope.selectedBuilding = buildingH;
			$scope.showModal();
		});

		$('#buildingi').click(function() {
			$scope.selectedBuilding = buildingI;
			$scope.showModal();
		});

		$('#buildingl').click(function() {
			$scope.selectedBuilding = buildingL;
			$scope.showModal();
		});

		$('#buildingp').click(function() {
			$scope.selectedBuilding = buildingP;
			$scope.showModal();
		});
	});

	$scope.showModal = function() {
		$uibModal.open({
			animation: true,
			templateUrl: 'modal.html',
			controller: 'ModalInstanceCtrl',
			scope: $scope
		})
	};



}])

.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	}

	$scope.numAdministrativeServices = $scope.selectedBuilding.administrativeServices.length;
	$scope.numFoodServices = $scope.selectedBuilding.foodServices.length;
	$scope.numAdditionalServices = $scope.selectedBuilding.additionalServices.length;


}]);

