'use strict';

// Directives

var ethanDirectives = angular.module('ethanDirectives', []);

ethanDirectives.directive("header", function() {
	return {
		restrict: "E",
		templateUrl: "partials/header.html"
	}
});

ethanDirectives.directive("about", function() {
  return {
    restrict: "E",
    templateUrl: "partials/about.html"
  }
})

ethanDirectives.directive("footer", function() {
	return {
		restrict: "E",
		templateUrl: "partials/footer.html"
	}
})