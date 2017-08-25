'use strict';

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl : "about.html"
        })
        .when("/contact", {
            templateUrl : "contact.html"
        })
        .when("/deck", {
            templateUrl : "deck.html"
        })
        .when("/resume", {
            templateUrl : "resume.html"
        });
});

// var app = angular.module('jessiealbarian2017', ['ui.bootstrap', 'ngRoute']);
//
//     app.controller('AboutCtrl', function($scope){
//         $scope.about = "About Us";
//     });

// (function(angular) {
//     'use strict';
//     angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
//         .config(['$routeProvider', '$locationProvider',
//             function($routeProvider, $locationProvider) {
//                 $routeProvider
//                     .when('/Book/:bookId', {
//                         templateUrl: 'about.html',
//                         controller: 'BookCtrl',
//                         controllerAs: 'book'
//                     })
//                     .when('/Book/:bookId/ch/:chapterId', {
//                         templateUrl: 'contact.html',
//                         controller: 'ChapterCtrl',
//                         controllerAs: 'chapter'
//                     });
//
//                 $locationProvider.html5Mode(true);
//             }])
//         .controller('MainCtrl', ['$route', '$routeParams', '$location',
//             function MainCtrl($route, $routeParams, $location) {
//                 this.$route = $route;
//                 this.$location = $location;
//                 this.$routeParams = $routeParams;
//             }])
//         .controller('BookCtrl', ['$routeParams', function BookCtrl($routeParams) {
//             this.name = 'BookCtrl';
//             this.params = $routeParams;
//         }])
//         .controller('ChapterCtrl', ['$routeParams', function ChapterCtrl($routeParams) {
//             this.name = 'ChapterCtrl';
//             this.params = $routeParams;
//         }]);
// })(window.angular);