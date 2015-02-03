var apiKey = 'MDE4MTYwOTc0MDE0MjMwMDU2NTcxMzE0NA001',
	nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

var app = angular.module('myApp', []);

app.controller('PlayerController', function($scope, $http) {
	$scope.playing = false;
	$scope.audio = document.createElement('audio');
	$scope.audio.src = '/media/npr.mp4'; //example hardcoded .mp4
	$scope.play = function() {
		$scope.audio.play)();
		$scope.playing = true;
	};
	$scope.stop = function() {
		$scope.audio.pause();
		$scope.playing = false;
	};
	$scope.audio.addEventListener('ended', function() {
		$scope.$apply(function() {
			$scope.stop()
		});
	});

	$http({
		mthod: 'JSONP',
		url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
	}).success(function(data, status) {
		// Have JSON list of NPR stories from API now...
	}).error(function(data, status) {
		// Some error occurred
	});
});




