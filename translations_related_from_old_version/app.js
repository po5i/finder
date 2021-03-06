/*
* Mathioudakis Theodore
* Agro-Know Technologies - 2013
*/


/*Define ng-app module*/
var listing = angular.module('akListing',['ngRoute', 'ui.bootstrap']);
/* var listing = angular.module('akListing',['ngRoute','mainController','listingController']); */

/* $locationProvider Configuration */
listing.config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.html5Mode(true)
	}]);

/* Shared Properties Service */
listing.service('sharedProperties',
	function () {
	    var total = 0;
	    var activeFacets = [];
	    var inactiveFacets = [];

	    return {
	        getTotal: function () {
	            return total;
	        },

	        setTotal: function(value) {
	            total = value;
	        },
	    };
	});


/*Routing*/
listing.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		  when('/search', {
		    templateUrl: 'ui/search.html',
		    controller: 'listingController'
		  }).
		  when('/item', {
		    templateUrl: 'ui/item.html',
		    controller: 'viewItemController'
		  }).
		  when('/item/:itemId', {
		    templateUrl: 'ui/item.html',
		    controller: 'viewItemController'
		  }).
		  when('/item_translations',{
		    templateUrl: 'ui/item_translations.html',
		    controller: 'viewTranslationsController'
		  }).
		  when('/item_translations/:itemId',{
		    templateUrl: 'ui/item_translations.html',
		    controller: 'viewTranslationsController'
		  }).
		  when('/', {
		   templateUrl: 'ui/search.html',
		    controller: 'mainController'
		  }).
		  otherwise({
		    redirectTo: '/search'
		  });
	}]);


