angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('signup', {
      url: '/sign-up',
      templateUrl: 'templates/sign-up.html',
      controller: 'SignUpCtrl'
    })
    .state('forgotpassword', {
      url: '/forgot-password',
      templateUrl: 'templates/forgot-password.html'
    })
    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html'
    })
    .state('activity', {
      url: '/main/activity',
      templateUrl: 'templates/activity.html',
      controller: 'ActivityCtrl'
    })
    .state('newsfeed', {
      url: '/main/newsfeed',
      templateUrl: 'templates/newsfeed.html'
    })
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'templates/home.html',
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.signup-interest', {
      url: '/signup-interest',
      views: {
        'home-tab': {
          templateUrl: 'templates/signup-interest.html'
        }
      }
    })
    .state('tabs.signup-interest-work', {
      url: '/signup-interest-work',
      views: {
        'home-tab': {
          templateUrl: 'templates/signup-interest-work.html'
        }
      }
    })
    .state('tabs.signup-char', {
      url: '/signup-char',
      views: {
        'home-tab': {
          templateUrl: 'templates/signup-char.html'
        }
      }
    })
    .state('tabs.comment', {
      url: '/signup-comment',
      views: {
        'home-tab': {
          templateUrl: 'templates/signup-comment.html'
        }
      }
    })

    .state('tabs.signup-detail', {
      url: '/signup-detail',
      views: {
        'signup-detail-tab': {
          templateUrl: 'templates/signup-detail.html',
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: '/facts',
      views: {
        'home-tab': {
          templateUrl: 'templates/facts.html'
        }
      }
    })
    .state('tabs.facts2', {
      url: '/facts2',
      views: {
        'home-tab': {
          templateUrl: 'templates/facts2.html'
        }
      }
    })
    .state('tabs.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    .state('tabs.navstack', {
      url: '/navstack',
      views: {
        'about-tab': {
          templateUrl: 'templates/nav-stack.html'
        }
      }
    })
    .state('tabs.contact', {
      url: '/contact',
      views: {
        'contact-tab': {
          templateUrl: 'templates/contact.html'
        }
      }
    });


   $urlRouterProvider.otherwise('/sign-up');

})

.controller('SignUpCtrl', function($scope, $state) {
  
  $scope.signUp = function(user) {
    console.log('Sign-Up', user);
    $state.go('tabs.home');
  };
  
})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
})
.controller('ActivityCtrl', function($scope) {

   
});