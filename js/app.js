var starwarsApp = angular.module('StarwarsApp', ['ngRoute', 'swapi']);

/**
 *	Routing Configurations
 */

starwarsApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl : 'pages/main.html',
		controller : 'MainController',
		controllerAs : 'main'
	}).when('/character/:id', {
		templateUrl: 'pages/characters.html',
		controller: 'CharacterController',
		controllerAs: 'character'
	}).when('/film/:id', {
		templateUrl: 'pages/films.html',
		controller: 'FilmController',
		controllerAs: 'film'
	}).when('/planet/:id', {
		templateUrl: 'pages/planets.html',
		controller: 'PlanetController',
		controllerAs: 'planet'
	}).when('/species/:id', {
		templateUrl: 'pages/species.html',
		controller: 'SpeciesController',
		controllerAs: 'species'
	}).when('/starship/:id', {
		templateUrl: 'pages/starships.html',
		controller: 'StarshipController',
		controllerAs: 'starship'
	}).when('/vehicle/:id', {
		templateUrl: 'pages/vehicles.html',
		controller: 'VehicleController',
		controllerAs: 'vehicle'
	})
	.otherwise('/');
}]);


