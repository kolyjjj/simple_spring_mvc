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
