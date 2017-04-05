/**
 * Created by Patryk on 05.04.2017.
 */
let galleryList = [];
let portfolioSubsets = 4;

$(document).ready(function () {

    for (let i = 1; i < 30; i++) {
        document.getElementById("gallery0").innerHTML += "<img data-src='images/przygotowania/" + i + ".jpg' />" + "\n";
    }
    for (let i = 1; i < 39; i++) {
        document.getElementById("gallery1").innerHTML += "<img data-src='images/slub/" + i + ".jpg' />" + "\n";
    }
    for (let i = 1; i < 48; i++) {
        document.getElementById("gallery2").innerHTML += "<img data-src='images/wesele/" + i + ".jpg' />" + "\n";
    }
    for (let i = 1; i < 44; i++) {
        document.getElementById("gallery3").innerHTML += "<img data-src='images/sesja_poslubna/" + i + ".jpg' />" + "\n";
    }

    //portfolio slider loader
    for (let i = 0; i < portfolioSubsets; i++) {
        galleryList[i] = $('#gallery' + i).portfolio({
            enableKeyboardNavigation: true, // enable / disable keyboard navigation (default: true)
            loop: false, // loop on / off (default: false)
            easingMethod: 'easeOutQuint', // other easing methods please refer: http://gsgd.co.uk/sandbox/jquery/easing/
            height: '500px', // gallery height
            width: '100%', // gallery width in pixels or in percentage
            lightbox: false, // dim off other images, highlights only currently viewing image
            showArrows: false, // show next / prev buttons
            logger: false, // for debugging purpose, turns on/off console.log() statements in the script
            spinnerColor: '#000', // Ajax loader color
            offsetLeft: -4, // position left value for current image
            opacityLightbox: '0.2' // opacity of other images which are not active

        });
    }
});
function LoadPortfolio(content, num) {
    for (let i =0; i<portfolioSubsets;i++) {
        galleryList[i].hide();
    }
    galleryList[num].init();
    galleryList[num].show(1000);
}


