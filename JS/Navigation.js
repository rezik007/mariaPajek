
$(document).ready(function () {

    let sectionsHeights = [];
    let navHeight = 55;
    let navButtonClassHandler = $('.nav-button');
    let navButtonClassHoverHandler = $('.nav-button:hover');

    function sumInRange(start, end) {
        let sum = 0;
        for(let i = start;i<=end; i++){
            sum+=sectionsHeights[i];
        }
        return sum - navHeight;
    }

    function changeToDark() {
        navButtonClassHandler.stop(true).animate({
            color : "#201f47"
        }, 700);
        navButtonClassHoverHandler.stop(true).css("color", "#8782ac")
    }
    function changeToLight() {
        navButtonClassHandler.stop(true).animate({
            color : "white"
        }, 700);
        navButtonClassHoverHandler.hover(function () {
            $(this).css("color", "#8782ac")

        })
    }

    $(window).scroll(function () {
        let position = $(window).scrollTop();
        sectionsHeights = [$('#logo-content').outerHeight(), $('#portfolio').outerHeight(), $('#offer').outerHeight(), $('#about-me').outerHeight(), $('#contact').outerHeight()];
        switch(true) {
            case (position < sectionsHeights[0]-navHeight):
                changeToLight();
                break;

            case (position > sectionsHeights[0]-navHeight && position<sumInRange(0,1)):
                changeToDark();
                break;
            case (position > sumInRange(0,1) && position <sumInRange(0,2)):
                changeToLight();
                break;
            case (position > sumInRange(0,2) && position<sumInRange(0,3)):
                changeToDark();
                break;
            case (position >sumInRange(0,3) && position<sumInRange(0,4)):
                changeToLight();
                break;
            default:
                changeToLight();
                break
        }
    });
});
function menuClickAction(content) {
    $(content).animatescroll();
}



