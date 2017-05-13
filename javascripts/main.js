var app = angular.module("callanWeirness", []);

app.controller("callansSoul", ($scope) => {
	$scope.buttonLabel = "SHOW ME CALLAN'S SOUL! (fav food)";
	$scope.class = "blankBackground";
	$scope.foodItemShow = false;

	$scope.showSoul = () => {
		$scope.buttonLabel = "NOM NOM NOM COOOOOKIES!";
		if ($scope.class === "soulBkg")
      		$scope.class = "blankBackground";
    	else
     		$scope.class = "soulBkg";
     	$scope.foodItemShow = true;

		};

});