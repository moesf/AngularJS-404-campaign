/* quizzes */
// create the module and name it bflApp
// also include ngRoute for all our routing needs
var bflApp = angular.module('bflApp', ['ngRoute', 'ngAnimate']);

// configure our routes
bflApp.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'partials/animation.html',
            controller  : 'mainController'
        })
        // route for the contact page
        .when('/quiz', {
            templateUrl : 'partials/quiz.html',
            controller  : 'quizController'
        })
        //redirect other urls
        //.otherwise({redirectTo: "/"})
});


// create the controller and inject Angular's $scope
bflApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-animation';

});



bflApp.controller("quizController", function($scope, $http) {
    $http.get("assets/data/quiz.json").
        success(function(data, status, headers, config) {
          $scope.quizzes = data;
        }). 
        error(function(data, status, headers, config) { 
            // log error 
        });

    //$scope.hearts = ['h0', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'h11'];
    $scope.hearts = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'h11','h12'];
    $scope.scoreboard = { 
        answered: 0,
        correct: 0 
    };
});

// bflApp.controller("quizController", ['$scope','$http', function($scope, $http) {
//     $http.get("assets/data/quiz.json").
//         success(function(data, status, headers, config) {
//           $scope.quizzes = data;
//         }). 
//         error(function(data, status, headers, config) { 
//             // log error 
//         });

//     $scope.hearts = ['h0', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'h11'];
//     $scope.scoreboard = { 
//         answered: 0,
//         correct: 0 
//     };
// }]);

//use question anchor as directive
bflApp.directive("anchor", function() {
    var linkFunction = function(scope, element, attributes) {
        var ul = $(element).find('ul');
        var ul_Id = ul.attr('index');
        // var test = function(){
        //     console.log(scope.scoreboard.correct);
        // }
        $(element).on("click", function() {
            ul.addClass('shown');
            ul.find('li').each(function(){
                $(this).on('click',function(){
                    $(this).addClass('chosen');
                    if ($(this).attr('index') == scope.quizzes[ul_Id].correctIndex) {
                        scope.scoreboard.answered ++;
                        scope.scoreboard.correct ++;
                        $('#score').html(scope.scoreboard.answered);
                        $(this).parent().parent().addClass('correct');
                        setTimeout(function(){
                            ul.animate({opacity: '0'}, 100);
                        }, 500);                      

                    } else {
                        scope.scoreboard.answered ++;
                        $('#score').html(scope.scoreboard.answered);                        
                        $(this).parent().parent().addClass('wrong');
                        setTimeout(function(){
                            ul.animate({opacity: '0'}, 100);
                        }, 500);  
                    };
                    //ul.parent().disable();
                    addHeart(scope.scoreboard.correct);
                    changeLevel(scope.scoreboard.correct);
                });
            });
        });
        var addHeart = function(correct){
            var parts = correct % 5;
            var hearts = Math.floor(correct / 5);
            var heartObjArray = scope.hearts;
            if (hearts < 1 ) {
                $('#'+heartObjArray[0]).addClass('a'+parts);
            } else if (hearts >=1)  {
                for (var i=0; i<hearts; i++) {
                    $('#'+heartObjArray[i]).addClass('a5');
                }
                if (parts != 0) {
                    $('#'+heartObjArray[hearts]).addClass('a'+parts);
                }
            }
        }
        var changeLevel = function(correct) {
            var parts = correct % 5;
            var hearts = Math.floor(correct / 5);

            if (hearts >= 1) {
                $('.score_words').addClass('shown').find('#box1 p').html('Hey Rocky Balboa,<br> You’ve Qualified!');
            } 
            else if (hearts >= 3) {
                $('.score_words').addClass('shown').find('#box1 p').html('Thelma, Louise is Proud of You!');
            }
            else if (hearts >= 5) {
                $('.score_words').addClass('shown').find('#box1 p').html('You’re a Power Ranger!');
            }
            else if (hearts >= 7) {
                $('.score_words').addClass('shown').find('#box1 p').html('Well hello, Jedi Master!');
            }            
            else if (hearts >= 9) {
                $('.score_words').addClass('shown').find('#box1 p').html('Wonder Twins Power, Activate!');
            }  
            else if (hearts >= 12) {
                $('.score_words').addClass('shown').find('#box1 p').html('NEO, You are the One!');
            }  
// “Hey Rocky Balboa, You’ve Qualified” (at 5 answers correct = 1 heart)
// “Thelma, Louise is Proud of You” (at 15 answers correct = 3 hearts)
// “You’re a Power Ranger” (at 25 answers correct = 5 hearts)
// “Well hello, Jedi Master” (at 35 answers correct = 7 hearts)
// “Wonder Twins Power, Activate” (at 45 answers correct = 9 hearts)
// “NEO, You are the One!” (all answers correct = 12 hearts)
        }
    };
    return {
        restrict: "A",
        link: linkFunction
    };
});



//             $('#module-1k #level')

//             $('#module-1k #level-desc').html()
// after-play

// bflApp.directive('anchor', function(){
//     var linkFunction = function(scope, element, attributes) {
//         var parentId = $(element).parent().attr('index');
//         $(element).on("click", function() {
//           $(this).addClass('chosen');
//           if (attributes.index == scope.quizzes[parentId].correctIndex) {
//             scope.scoreboard.correctAnswers ++;
//           }
//         });
//     };
//     return {
//         restrict: "A",
//         link: linkFunction
//     };  
// })

// use <li> as directive
// bflApp.directive("question", function() {
//     var linkFunction = function(scope, element, attributes) {
//         var parentId = $(element).parent().attr('index');
//         $(element).on("click", function() {
//           $(this).addClass('chosen');
//           if (attributes.index == scope.quizzes[parentId].correctIndex) {
//             scope.scoreboard.correctAnswers += scope.scoreboard.correctAnswers;
//             $(this).parent().parent().addClass('correct')
//           }
//         });
//     };
//     return {
//         restrict: "A",
//         link: linkFunction
//     };
// });
        //alert('Correct');
//alert(scope.scoreboard.correctAnswers)
//alert('index is '+ attributes.index);
//alert('parent index is' + parentId);


/*
  $scope.$watch("name", function(newValue, oldValue) {
    if (newValue.length > 0) {
      $scope.greeting = "Greetings " + newValue;
    }
  });
*/

// bflApp.factory('getQuiz', function($http) {

//     return {
//         getData: function() {
//             $http.get("assets/data/quiz.json")
//             // .success(function(data) {
//             //     return data;
//             // })
//             // .error(function (data) {
//             //     return "Request failed";
//             // });
//         }
//     }
// });

// bflApp.controller('quizController', function($scope, getQuiz) {
//     $scope.pageClass = 'page-quiz';

//     getQuiz.getData().then(function(response) {
//         $scope.posts =  response.data        
//     });

// });

/*
bflApp.factory("Post", function($resource) { 
    return $resource("assets/data/quiz.json", {}, { 
        query: { method: "GET", isArray: false } 
    }); 
}); 

bflApp.controller("quizController", function($scope, Post) { 
    Post.query(function(data) { 
        $scope.posts = data.posts; 
    }); 
});

*/

/**/
/**/
/**/

