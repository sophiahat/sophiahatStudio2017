var myApp = angular.module('myApp', ['ngRoute', 'firebase', 'ngSanitize', 'ui.bootstrap']);

myApp.config(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCHnf3VEl_k_kpgi0T5A_b3EvyuT9Hysl4",
    authDomain: "chrisspencercreative17.firebaseapp.com",
    databaseURL: "https://chrisspencercreative17.firebaseio.com",
    storageBucket: "chrisspencercreative17.appspot.com",
    messagingSenderId: "271302276044"
  };
  firebase.initializeApp(config);
});

myApp.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
        if(error == "AUTH_REQUIRED") {
            $rootScope.message = 'Sorry, you must log in to access this page.';
            $location.path('/login');
        }//AUTH REQUIRED
    });// event info
}]);//run





myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        }).
        when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'AdminController',
            resolve: {
                currentAuth: function(Authentication) {
                    return Authentication.requireAuth();
                }//current Auth
                
            }//resolve
        }).
        when('/booking', {
            templateUrl: 'views/booking.html',
            controller: 'BookingController'
        }).
        when('/bookingsubmission', {
            templateUrl: 'views/bookingsubmission.html',
            controller: 'BookingSubmissionController'
        }).
        when('/clients', {
            templateUrl: 'views/clients.html',
            controller: 'ClientController'
        }).
        when('/client-portal', {
            templateUrl: 'views/client-portal.html'
        }).
        when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        }).
        when('/error', {
            templateUrl: 'views/error.html'     
        }).
        when('/gear', {
            templateUrl: 'views/gear.html',
            controller: 'GearController'
        }).
        when('/home', {
            templateUrl: 'views/home.html'
        }).
        when('/layout', {
            templateUrl: 'views/layout.html',
            controller: 'LayoutController'
        }).
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'RegistrationController'
        }).
        when('/news', {
            templateUrl: 'views/news.html',
            controller: 'NewsController'
        }).
        when('/portfolio', {
            templateUrl: 'views/portfolio.html',
            controller: 'PortfolioController'
        }).
        when('/rates', {
            templateUrl: 'views/rates.html',
            controller: 'RatesController'
        }).
        when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegistrationController'
        }).
        when('/resources', {
            templateUrl: 'views/resources.html',
            controller: 'ResourcesController'
        }).
        when('/services', {
            templateUrl: 'views/services.html',
            controller: 'ServicesController'
        }).
        when('/studio-policy', {
            templateUrl: 'views/studio-policy.html'
        }).
        when('/thanks', {
            templateUrl: 'views/thanks.html'
        }).
        when('/top-ten-reasons', {
            templateUrl: 'views/top-ten-reasons.html'
        }).
        otherwise({
            redirectTo: '/home'});  
}]);

myApp.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(false);
}]);

myApp.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://app.box.com/**'
    ]);
});

myApp.filter("trustUrl", ['$sce', function ($sce) {
    return function (recordingUrl) {
        console.log('engaging trust URL');
        return $sce.trustAsResourceUrl(recordingUrl);
    };
}]);



