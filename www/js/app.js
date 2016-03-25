angular.module('ionicApp', ['ionic', 'ionic-ratings'])

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
      templateUrl: 'templates/newsfeed.html',
      controller: 'ActivityCtrl'
    })
    //  .state('ideas', {
    //   url: '/main/ideas',
    //   templateUrl: 'templates/ideas.html',
    //   controller: 'ActivityCtrl'
    // })
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    .state('tabs.eval', {
      url: '/eval',
      views: {
        'eval-tab': {
          templateUrl: 'templates/eval.html',
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.sel', {
      url: '/sel',
      views: {
        'sel-tab': {
          templateUrl: 'templates/sel.html'
          // controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.prog', {
      url: '/prog',
      views: {
        'prog-tab': {
          templateUrl: 'templates/prog.html',
          controller: 'HomeTabCtrl'
        }
      }
    })
    //  .state('tabs.signup-detail', {
    //   url: '/signup-detail',
    //   views: {
    //     'signup-detail-tab': {
    //       templateUrl: 'templates/signup-detail.html',
    //       controller: 'HomeTabCtrl'
    //     }
    //   }
    // })

    // .state('tabs', {
    //   url: '/tab',
    //   abstract: true,
    //   templateUrl: 'templates/tabs.html'
    // })
    .state('home', {
      url: '/home',
      // views: {
      //   'home-tab': {
          templateUrl: 'templates/home.html',
          controller: 'HomeTabCtrl'
      //   }
      // }
    })
    .state('signup-interest', {
      url: '/signup-interest',
      // views: {
      //   'home-tab': {
          templateUrl: 'templates/signup-interest.html'
      //   }
      // }
    })
    .state('signup-interest-work', {
      url: '/signup-interest-work',
      // views: {
      //   'home-tab': {
          templateUrl: 'templates/signup-interest-work.html'
      //   }
      // }
    })
    .state('signup-char', {
      url: '/signup-char',
      // views: {
      //   'home-tab': {
          templateUrl: 'templates/signup-char.html'
      //   }
      // }
    })
    .state('comment', {
      url: '/signup-comment',
      // views: {
      //   'home-tab': {
          templateUrl: 'templates/signup-comment.html'
      //   }
      // }
    })

    .state('signup-detail', {
      url: '/signup-detail',
      // views: {
      //   'signup-detail-tab': {
          templateUrl: 'templates/signup-detail.html',
          controller: 'HomeTabCtrl'
      //   }
      // }
    })
    .state('facts', {
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
    $state.go('home');
  };
  
})

.controller('HomeTabCtrl', function($scope) {
  $scope.ideas = [
    {id: 1, value: '아이디어1'},
    {id: 2, value:'아이디어2'},
    {id: 3, value:'아이디어3'},
    {id: 4, value:'아이디어4'},
    {id: 5, value:'아이디어5'},
  ];

  $scope.ideaprogs = [
    {id: 1, value: 'All2man 프로젝트 진행상황', progress: 'progress-h.png'},
    {id: 2, value:'태블릿 피씨 미팅룸 비치를 통한 종이사용 감소 프로젝트', progress: 'm'},
    {id: 3, value:'유지율 향상을 위한 조기회차 관리 프로젝트', progress: 'l'}
  ];

  $scope.ratingsObject = {
    iconOn: 'ion-ios-star',
    iconOff: 'ion-ios-star-outline',
    iconOnColor: 'rgb(200, 200, 100)',
    iconOffColor: 'rgb(200, 100, 100)',
    rating: 4,
    minRating: 0,
    readOnly:false,
    callback: function(rating) {
      $scope.ratingsCallback(rating);
    }
  };

  $scope.ratingsCallback = function(rating) {
    console.log('Selected rating is : ', rating);
  };
})
.controller('ActivityCtrl', function($scope) {

   
});

  angular.module('ionic-ratings', ['ionic'])
  .directive('ionicRatings',ionicRatings);
  
  function ionicRatings () {
    return {
      restrict: 'AE',
      replace: true,
      template: '<div class="text-center ionic_ratings">' +
        '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(1)" ng-show="rating < 1" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(1)" ng-show="rating > 0" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(2)" ng-show="rating < 2" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(2)" ng-show="rating > 1" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(3)" ng-show="rating < 3" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(3)" ng-show="rating > 2" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(4)" ng-show="rating < 4" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(4)" ng-show="rating > 3" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(5)" ng-show="rating < 5" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(5)" ng-show="rating > 4" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '</div>',
      scope: {
        ratingsObj: '=ratingsobj'
      },
      link: function(scope, element, attrs) {

        //Setting the default values, if they are not passed
        scope.iconOn = scope.ratingsObj.iconOn || 'ion-ios-star';
        scope.iconOff = scope.ratingsObj.iconOff || 'ion-ios-star-outline';
        scope.iconOnColor = scope.ratingsObj.iconOnColor || 'rgb(200, 200, 100)';
        scope.iconOffColor = scope.ratingsObj.iconOffColor || 'rgb(200, 100, 100)';
        scope.rating = scope.ratingsObj.rating || 0;
        scope.minRating = scope.ratingsObj.minRating || 0;
        scope.readOnly = scope.ratingsObj.readOnly || false;

        //Setting the color for the icon, when it is active
        scope.iconOnColor = {
          color: scope.iconOnColor
        };

        //Setting the color for the icon, when it is not active
        scope.iconOffColor = {
          color: scope.iconOffColor
        };

        //Setting the rating
        scope.rating = (scope.rating > scope.minRating) ? scope.rating : scope.minRating;

        //Setting the previously selected rating
        scope.prevRating = 0;

        //Called when he user clicks on the rating
        scope.ratingsClicked = function(val) {
          if (scope.minRating !== 0 && val < scope.minRating) {
            scope.rating = scope.minRating;
          } else {
            scope.rating = val;
          }
          scope.prevRating = val;
          scope.ratingsObj.callback(scope.rating);
        };

        //Called when he user un clicks on the rating
        scope.ratingsUnClicked = function(val) {
          if (scope.minRating !== 0 && val < scope.minRating) {
            scope.rating = scope.minRating;
          } else {
            scope.rating = val;
          }
          if (scope.prevRating == val) {
            if (scope.minRating !== 0) {
              scope.rating = scope.minRating;
            } else {
              scope.rating = 0;
            }
          }
          scope.prevRating = val;
          scope.ratingsObj.callback(scope.rating);
        };
      }
    }
  }
  