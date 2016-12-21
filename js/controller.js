starwarsApp.controller('MainController', ['$scope', 'SwapiService', 
	function($scope, SwapiService) {
		$scope.heading = "A Simple Star Wars Compendium";
		$scope.paragraph = "All the Star Wars data you've ever wanted: Planets, Spaceships, Vehicles, People, Films and Species.";

		SwapiService.people().then(function(data) {
			$scope.people = data.data.results;
		});

		SwapiService.films().then(function(data) {
			$scope.films = data.data.results;

			angular.forEach($scope.filmDesc, function(film) {
				var callApi = 'http://swapi.co/api/films/' + film.episode_id + '/';
				$scope.films[callApi] = film.title;
			})
		});

		SwapiService.planets().then(function(data) {
			$scope.planets = data.data.results;
		});

		SwapiService.species().then(function(data) {
			$scope.species = data.data.results;
		});

		SwapiService.starships().then(function(data) {
			$scope.starships = data.data.results;
		});

		SwapiService.vehicles().then(function(data) {
			$scope.vehicles = data.data.results;
		});
	}
]);

starwarsApp.controller('CharacterController', ['$routeParams', '$scope', 'SwapiService',
	function($routeParams, $scope, SwapiService) {
		$scope.character = {};
		$scope.films = {};
		$scope.loading = true;
		$scope.id = $routeParams.id;

		SwapiService.people().then(function(data) {
			$scope.people = data.data.results;

			angular.forEach($scope.people, function(person) {
				angular.forEach(person.films, function(film) {
					$scope.films[film] = '';
				});
			});

			angular.forEach($scope.people, function(person) {
				if(person.name.toLowerCase() === $routeParams.id.toLowerCase()) {
					angular.copy(person, $scope.character);
					console.log(person);
				}
			});
			$scope.loading = false;
		});

		SwapiService.films().then(function(data) {
			$scope.filmDesc = data.data.results;

			angular.forEach($scope.filmDesc, function(film) {
				var callApi = 'http://swapi.co/api/films/' + film.episode_id + '/';
				$scope.films[callApi] = film.title;
			});
		});
	}
]);

starwarsApp.controller('FilmController', ['$routeParams', '$scope', 'SwapiService',
	function($routeParams, $scope, SwapiService) {
		$scope.film = {};
		$scope.characters = {};
		$scope.loading = true;
		$scope.id = $routeParams.id;

		SwapiService.films().then(function(data) {
			$scope.films = data.data.results;

			angular.forEach($scope.films, function(film) {
				angular.forEach(film.characters, function(character) {
					$scope.characters[character] = "";
				});
			});

			angular.forEach($scope.films, function(film) {
				if(film.episode_id == $routeParams.id) {
					angular.copy(film, $scope.film);
				}
			});
			$scope.loading = false;
		});

		SwapiService.people().then(function(data) {
			$scope.characterInfo = data.data.results;

			angular.forEach($scope.characterInfo, function(character) {
				var api_call = character.url;
				$scope.characters[api_call] = character.name;
			});
		});

		SwapiService.films().then(function(data) {
			
		});
	}
]);

starwarsApp.controller('SpeciesController', ['$routeParams', '$scope', 'SwapiService',
	function($routeParams, $scope, SwapiService) {
		$scope.species = {};
		$scope.loading = true;
		$scope.id = $routeParams.id;

		SwapiService.species().then(function(data) {
			angular.forEach(data.data.results, function(species) {
				if(species.name.toLowerCase() === $routeParams.id.toLowerCase()) {
					angular.copy(species, $scope.species);
				}
			});
			$scope.loading = false;
		});
	}
]);

starwarsApp.controller('PlanetController', ['$routeParams', '$scope', 'SwapiService',
	function($routeParams, $scope, SwapiService) {
		$scope.planet = {};
		$scope.loading = true;
		$scope.id = $routeParams.id;

		SwapiService.planets().then(function(data) {
			angular.forEach(data.data.results, function(planet) {
				if(planet.name.toLowerCase() === $routeParams.id.toLowerCase()) {
					angular.copy(planet, $scope.planet);
					console.log(planet);
				}
			});
			$scope.loading = false;
		});
	}
]);

starwarsApp.controller('StarshipController', ['$routeParams', '$scope', 'SwapiService',
	function($routeParams, $scope, SwapiService) {
		$scope.starship = {};
		$scope.loading = true;
		$scope.id = $routeParams.id;

		SwapiService.starships().then(function(data) {
			angular.forEach(data.data.results, function(starship) {
				if(starship.name.toLowerCase() === $routeParams.id.toLowerCase()) {
					angular.copy(starship, $scope.starship);
					console.log(starship);
				}
			});
			$scope.loading = false;
		});
	}
]);

starwarsApp.controller('VehicleController', ['$routeParams', '$scope', 'SwapiService',
	function($routeParams, $scope, SwapiService) {
		$scope.vehicle = {};
		$scope.loading = true;
		$scope.id = $routeParams.id;

		SwapiService.vehicles().then(function(data) {
			angular.forEach(data.data.results, function(vehicle) {
				if(vehicle.name.toLowerCase() === $routeParams.id.toLowerCase()) {
					angular.copy(vehicle, $scope.vehicle);
					console.log(vehicle);
				}
			});
			$scope.loading = false;
		});
	}
]);



/*
starwarsApp.controller('MainCtrl', ['$scope', function($scope) {
	$scope.heading = "Hello world!";
	$scope.paragraph = "This is me, David!";
}]);
*/
