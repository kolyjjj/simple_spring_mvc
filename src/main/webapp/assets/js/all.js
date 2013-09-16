var simpleModule = angular.module("simple", []);

simpleModule.controller('tooltipCtrl', ['$scope', function($scope){
    $scope.greeting="Welcome to bootstrap tooltip";
}]);

simpleModule.directive('sTooltip', function(){
    return function(scope, element, attrs){
        console.log("the element is:");
        console.log(element);

        var isMobile = Modernizr.mq('(max-width: 600px)');
        console.log(isMobile);

        if (isMobile){
            jQuery(element).popover({
                animation:false,
                html:true,
                trigger:'manual',
                placement: "right",
                content: "just a test tooltip"
            });

            var clickQuestion = function(element){
                    jQuery(element).popover();
                    return false;
            };

            var question = jQuery(element).find('.tooltip-class');
            jQuery(question).click(function(){
                console.log('the click function is called.');
                jQuery(element).popover('show');
                return false;
            });

            jQuery(element).on('shown.bs.popover', function(){
                console.log('the show event is fired!');
                jQuery(document).click(function(){
                    jQuery(element).popover('hide');
                    jQuery(document).unbind('click');
                });
                console.log(question);
                jQuery(question).unbind('click');
            });

            jQuery(element).on('hidden.ps.popover', function(){
                console.log('the hidden event is fired!');
                jQuery(question).click(function(){
                    jQuery(element).popover('show');
                    return false;
                });
            });
        }else{
            console.log('web');
            jQuery(element).popover({
                            animation:false,
                            html:true,
                            trigger:'click',
                            placement: "right",
                            content: "just a test tooltip"
            });
        }

    };
});

console.log("mask is called!");
$(function(){
jQuery('#mask').inputmask("d/m/y");
});

simpleModule.directive('colorBlock', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            text: '@'
        },
        template: "<div class='color-box'>{{text}}</div>"
    };
});

simpleModule.directive('dlHoverShading', function(){
    return function(scope, elem, attrs){
    console.log("hover shading");
        var colorClass = attrs.dlHoverShading || 'hover-background-color';
        angular.element(elem).hover(
            function(){
                angular.element(this).addClass(colorClass);
            },
            function(){
                angular.element(this).removeClass(colorClass);
            }
        );
    };
});


////for angularjs recursive directive
//var app = angular.module('simple', []);

simpleModule.directive('collection', function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			collection: '='
		},
//		templateUrl: "collection.html"
        template:"<ul><member ng-repeat='member in collection' member='member'></ul>"
	};
});

simpleModule.directive('member', function($compile){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			member: '='
		},
//		templateUrl: "member.html",
        template:"<li ng-click='add()'>{{member.name}}</li>",
		link: function(scope, element, attrs){
			if (angular.isArray(scope.member.children)){
				element.append("<collection collection='member.children'></collection>");
				$compile(element.contents())(scope);
			}

			scope.add = function(){
				console.log('add');
			};
		}
	};
});

simpleModule.controller('IndexCtrl', function($scope){
	$scope.tasks = [
		{
			name: 'Europe',
			children: [
				{
					name: 'Italy',
					children:[
						{
							name: 'Rome'
						},
						{
							name: 'Milan'
						}
					]
				},
				{
					name: 'Spain'
				}
			]
		},
		{
			name: 'South America',
			children: [
				{
					name: 'Brasil'
				},
				{
					name: 'Peru'
				}
			]
		}
	];
});