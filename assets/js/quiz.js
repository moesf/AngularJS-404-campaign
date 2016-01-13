/* quizzes */
// create the module and name it bflApp
// also include ngRoute for all our routing needs
var bflApp = angular.module('bflApp', ['ngRoute', 'ngAnimate']);

// configure our routes
bflApp.config(function($routeProvider, $httpProvider) {

$httpProvider.defaults.withCredentials = true;
$httpProvider.defaults.useXDomain = true;
delete $httpProvider.defaults.headers.common['X-Requested-With'];

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
        // route for the contact page
        .when('/quizagain', {
            templateUrl : 'partials/quiz2.html',
            controller  : 'quizagainController'
        })
        // route for the contact page
        .when('/rules', {
            templateUrl : 'partials/rules.html',
            controller  : 'rulesController'
        })

        //redirect other urls
        //.otherwise({redirectTo: "/"})
});


// create the controller and inject Angular's $scope
bflApp.controller('mainController', function($scope, $location) {
    $scope.pageClass = 'page-animation'; 
    // console.log($location.path());
    // $scope.$watch(function() { return $location.path(); }, function(newValue, oldValue){  
    //     if ($.cookie('submitted') == 'true' && newValue == 'quiz'){  
    //             $location.path('quizagain');  
    //     }  
    // });  
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
        correct: 0,
        submitted: false
    };

    $scope.user = {};

    $scope.submit = function(){
        // if ($scope.user.confirmEmail !== $scope.user.email) {
        //     $scope.form.$valid = false;
        // }
        // if ($('#confirmEmail').val().trim() != $('#email').val().trim()) {
        //     $scope.form.$valid = false;
        // } 
        var good_email = true;
        var enough_score = true;
        if ($('#confirmEmail').val().trim() != $('#email').val().trim()) {
            good_email = false;
            console.log('false');
            //$("#bflForm").addClass( "ng-invalid" )
            //form.email.$valid = false;
        }

        if ($scope.scoreboard.correct<5) {
            enough_score = false;
            console.log(enough_score);
        }
        console.log(enough_score);
        //console.log($scope.form.email.$valid)
        //console.log(typeof $scope.form.$valid); boolean
        //$("#bflForm").hasClass( "ng-invalid" )
        //ng-dirty ng-valid-email ng-valid ng-valid-required
        if (!$scope.form.$valid || !good_email || !enough_score) {
            //console.log('error')
            if (!enough_score) {
                $('#module-1k #form_curtain').attr('class','').addClass('warning').show();
            }
            else {
                $('#module-1k #form_curtain').attr('class','').addClass('error').show();
            }
            
        } else {
            //ajax submitting the form
            $('#module-1k #form_curtain').attr('class','').addClass('after-submit').show();
            //$('#module-1k #form_curtain').removeClass('error,warning').addClass('after-submit').show();
            $('#module-1k header.before-submit').hide();
            $('#module-1k header.after-submit').show();
            $('#module-1k .col2').addClass('after-submit');
            //$()

            function crossDomainPost() {
              // Add the iframe with a unique name
              var iframe = document.createElement("iframe");
              var uniqueString = "bflJ_iframe";
              document.body.appendChild(iframe);
              iframe.style.display = "none";
              //iframe.style.visibililty = "hidden";
              iframe.contentWindow.name = uniqueString;

              //targeting the iframe
              var form = document.getElementById('bflForm');
              form.target = uniqueString;
              form.action = "https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";
              form.method = "POST";

              //document.body.appendChild(form);
              form.submit();
            }
            crossDomainPost();
            $scope.scoreboard.submitted = true;
            $.cookie('submitted', 'true');
            //$('.quiz').addClass('again');


        }
    
    }


});

bflApp.controller("quizagainController", function($scope, $http) {
    //$.cookie('submitted', 'false');
    //$.cookie('submitted', 'false');
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
        correct: 0,
        submitted: true
    };

    $scope.user = {};

    $scope.findout = function(){
        //$('#module-1k #form_curtain').removeClass('error').addClass('after-submit').show();
        $('#module-1k header.before-submit').hide();
        $('#module-1k header.after-submit').show();
        $('#module-1k .col2').addClass('after-submit');        
    }
    $scope.refresh = function(){
        // var x = location.href;
        // location.assign(x);
        location.reload();
        $(window).scrollTop(0);
    }


});


//use question anchor as directive
bflApp.directive("anchor", function() {
    var linkFunction = function(scope, element, attributes) {
        //element: the question anchor link
        var ul = $(element).find('ul');
        var ul_Id = ul.attr('index');
        $(element).on("click", function() {
            ul.addClass('shown');
            $(this).addClass('clicked')
            ul.find('li').each(function(){
                $(this).on('click',function(){
                    $(this).addClass('chosen');
                    if ($(this).attr('index') == scope.quizzes[ul_Id].correctIndex) {
                        scope.scoreboard.answered ++;
                        scope.scoreboard.correct ++;
                        $('#score').html(scope.scoreboard.answered);
                        $('.correctAnswers').html(scope.scoreboard.correct);
                        $('.404_Answer_Total').val(scope.scoreboard.correct);
                        $(this).parent().parent().addClass('correct');//element
                        setTimeout(function(){
                            ul.animate({opacity: '0'}, 200).hide();
                        }, 10);                      
                    } else {
                        scope.scoreboard.answered ++;
                        $('#score').html(scope.scoreboard.answered);                        
                        $(this).parent().parent().addClass('wrong');
                        setTimeout(function(){
                            ul.animate({opacity: '0'}, 200).hide();
                        }, 10);   
                    };

                    addHeart(scope.scoreboard.correct);
                    changeLevel(scope.scoreboard.correct, scope.scoreboard.submitted);
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
        var changeLevel = function(correct, submitted) {
            var parts = correct % 5;
            var hearts = Math.floor(correct / 5);

            if (hearts >= 1) {
                if (!submitted) {
                    $('.score_words > #box1 > p').html('Hey Rocky Balboa,<br> You’ve Qualified!').parents('.score_words').slideDown(1000);
                }
            } 
            if (hearts >= 3) {
                $('.score_words > #box1 > p').html('Thelma, Louise is Proud of You!');
            }
            if (hearts >= 5) {
                $('.score_words > #box1 > p').html('You’re a Power Ranger!');
            }
            if (hearts >= 7) {
                $('.score_words > #box1 > p').html('Well hello, Jedi Master!');
            }            
            if (hearts >= 9) {
                $('.score_words > #box1 > p').html('Wonder Twins Power, Activate!');
            }  
            if (hearts >= 12) {
                $('.score_words > #box1 > p').html('NEO, You are the One!');
            }  

            var ca = correct;


            var h3 = "You\'re no fool, you\'re the ";
            var p = "Tell everyone! Now! Do it!";

            if (ca >= 51) {
                $('.level').html('Ultra Supreme Wizard Overlord');
                $('.level-desc').html('You got ' + ca + ' out of 60 questions correct!');            
                $('#social-sharing .level').html(h3+'Ultra Supreme Wizard Overlord');
                $('#social-sharing .level-desc').html(p);
            } 
            if (ca >= 41&& ca < 51) {
                $('.level').html('Grand Master Mage');
                $('.level-desc').html('You got ' + ca + ' out of 60 questions correct!');            
                $('#social-sharing .level').html(h3+'Grand Master Mage');
                $('#social-sharing .level-desc').html(p);
            } 
            if (ca >= 31 && ca < 41) {
                $('.level').html('Elder High King of the Elves');
                $('.level-desc').html('You got ' + ca + ' out of 60 questions correct!');            
                $('#social-sharing .level').html(h3+'Elder High King of the Elves');
                $('#social-sharing .level-desc').html(p);
            } 
            if (ca >= 21 && ca < 31) {
                $('.level').html('4th Class Druid Bard');
                $('.level-desc').html('You got ' + ca + ' out of 60 questions correct!');            
                $('#social-sharing .level').html(h3+'4th Class Druid Bard');
                $('#social-sharing .level-desc').html(p);
            }  
            if (ca >= 5 && ca < 21) {
                $('.level').html('Paladin Moisture Farmer');
                $('.level-desc').html('You got ' + ca + ' out of 60 questions correct!');
                $('#social-sharing .level').html(h3+'Paladin Moisture Farmer');
                $('#social-sharing .level-desc').html(p);
            } 
            if (ca <5) {
            }
            //update the og tags
            $("meta[property='og:title']").attr("content", $('#social-sharing .level').html());
            $("meta[property='og:description']").attr("content", $('#social-sharing .level-desc').html());
        }
    };
    return {
        restrict: "A",
        link: linkFunction
    };
});





/**/
/**/
/**/

