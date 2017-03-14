angular.module('pf', ['ui.router', 'ngAnimate'])

	.config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

		//Set base route and catch-all
		$urlRouterProvider.when('', '/');

		//Home Page State
		$stateProvider.state('home', {
			url: '/',
			views: {
				'body@': {
					templateUrl: 'partials/content.html',
					controller: ['$scope', '$anchorScroll', function ($scope, $anchorScroll) {
						$scope.goToHome = function () {
							$anchorScroll();
						};
					}]
				},
				'hero@home': {
					templateUrl: 'partials/hero.html',
					controller: 'HeroController'
				},
				'about@home': {
					templateUrl: 'partials/about.html'
				},
				'projects@home': {
					templateUrl: 'partials/projects.html'
				},
				'contact@home': {
					templateUrl: 'partials/contact.html'
				}
			}
		});

		$stateProvider.state('project', {
			url: '/project',
			views: {
				'body@': {
					templateUrl: 'partials/details.html'
				}
			},
			controller: ['$scope', '$state', '$anchorScroll', function ($scope, $state, $anchorScroll) {
				
				if ($state.current.name === 'project') {
					$state.go('project.intrepidem');
				}
			}]
		});

		$stateProvider.state('project.intrepidem', {
			url: '/intrepidem',
			views: {
				'description@project': {
					templateUrl: 'partials/intrepidem.html'
				}
			}
		});

		$stateProvider.state('project.studyworks', {
			url: '/study-works',
			views: {
				'description@project': {
					templateUrl: 'partials/studyworks.html'
				}
			}
		});

		$stateProvider.state('project.lemoyne', {
			url: '/lemoyne-community-center',
			views: {
				'description@project': {
					templateUrl: 'partials/lemoyne.html'
				}
			}
		});

		$stateProvider.state('project.provider', {
			url: '/find-a-doctor',
			views: {
				'description@project': {
					templateUrl: 'partials/find-a-doctor.html'
				}
			}
		});

		$stateProvider.state('project.cibola', {
			url: '/cibola-data-collection',
			views: {
				'description@project': {
					templateUrl: 'partials/cibola.html'
				}
			}
		});

		$stateProvider.state('project.beer', {
			url: '/beer-branding',
			views: {
				'description@project': {
					templateUrl: 'partials/beer-labels.html'
				}
			}
		});

		$stateProvider.state('project.graphics', {
			url: '/graphic-art',
			views: {
				'description@project': {
					templateUrl: 'partials/graphics.html'
				}
			}
		});

		$stateProvider.state('project.parkhurst', {
			url: '/parhurst-dining',
			views: {
				'description@project': {
					templateUrl: 'partials/parkhurst.html'
				}
			}
		});

		$stateProvider.state('project.nationalParks', {
			url: '/national-parks',
			views: {
				'description@project': {
					templateUrl: 'partials/national-parks.html'
				}
			}
		});

	})

	.controller('HeroController', ['$scope', '$state', '$timeout', '$q', '$anchorScroll',
		function ($scope, $state, $timeout, $q, $anchorScroll) {

			$scope.word = '';

			function buildWord (word) {

				var deferred = $q.defer();

				$timeout(function () {

					for (var i=0;i<word.length;i++) {
						setTimeout(function (x) {

							$scope.word += word[x];
							$scope.$apply();

							//if on last loop
							if (x === word.length-1) {
								deferred.resolve();
							}

						}, i * 150, i);
					}

				}, 1000);

				return deferred.promise;
			}

			function eraseWord () {

				var deferred = $q.defer();

				if ($scope.word.length === 0) {
					deferred.resolve();
				}

				for (var i=0;i<$scope.word.length;i++) {
					setTimeout(function () {
						$scope.word = $scope.word.substring(0, $scope.word.length - 1);
						$scope.$apply();

						if ($scope.word.length === 0) {
							return deferred.resolve();
						}

					}, 100*i);
				}

				return deferred.promise;
			}

			//what have I done
			function startWordLoop() {

				$timeout(function () {

					eraseWord().then(function () {

						buildWord('a web developer').then(function () {

							$timeout(function () {

								eraseWord().then(function () {

									buildWord('an artist').then(function () {

										$timeout(function () {

											eraseWord().then(function () {

												buildWord('a graphic designer').then(startWordLoop);

											});

										}, 3000);

									});
								});

							}, 3000);
						});

					});
				}, 3000);

			}

			startWordLoop();

			$scope.goToHome = function () {

				if ($state.current.name === 'home') {
					$anchorScroll();
				}
			};

		}
	]);