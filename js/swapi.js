var swapiService = angular.module('swapi', []);

swapiService.factory('SwapiService', function($http) {
	function Swapi(){};

	/*  Calling API from Swapi host */
	Swapi.domain = 'http://swapi.co/api';

	Swapi.people = function(){
		var path = '/people';
		var url = Swapi.domain + path; /* this results on 'http://swapi.co/api/people' */

		return $http.get(url).then(function(response) {
			return response;
		});
	}

	Swapi.species = function() {
		var path = '/species';
		var url = Swapi.domain + path;

		return $http.get(url).then(function(response) {
			return response;
		});
	}

	Swapi.films = function() {
		var path = '/films';
		var url = Swapi.domain + path;

		return $http.get(url).then(function(response) {
			return response;
		});
	}

	Swapi.planets = function(){
		var path = '/planets';
		var url = Swapi.domain + path; /* this results on 'http://swapi.co/api/planets' */

		return $http.get(url).then(function(response) {
			return response;
		});
	}

	Swapi.starships = function() {
		var path = '/starships';
		var url = Swapi.domain + path; /* this results on 'http://swapi.co/api/starships' */

		return $http.get(url).then(function(response) {
			return response;
		});
	}

	Swapi.vehicles = function() {
		var path = '/vehicles';
		var url = Swapi.domain + path; /* this results on 'http://swapi.co/api/starships' */

		return $http.get(url).then(function(response) {
			return response;
		});
	}

	return Swapi;
});