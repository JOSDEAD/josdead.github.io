$(function () {
    new WOW().init();
    $('.portfolio-item').sliphover({
        target: '.item img',
        caption: 'data-caption'
    });
    // NAV POSITION
    var navPos = 960;
    var lastPos = 0;
    var lockTimer
    console.log("gffdg");
    $(window).on('scroll', function () {

            var pos = $(window).scrollTop();

            var pos2 = pos + 100;
            var scrollBottom = pos + $(window).height();
            if (pos >= navPos + $('nav').height() && lastPos < pos) {
                $('nav').addClass('animated fadeInDown');
                $('nav').addClass('fixed-top');
            }
            if (pos < navPos && lastPos > pos) {
                $('nav').removeClass('animated fadeInDown');
                $('nav').removeClass('fixed-top');
            }
            lastPos = pos;
        }



    );
});