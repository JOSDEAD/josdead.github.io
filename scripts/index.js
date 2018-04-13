$(function() {
    // NAV POSITION
    var navPos = $('nav').position().top;
    var lastPos = 0;
    var lockTimer
  
    $(window).on('scroll', function () {
  
      var pos = $(window).scrollTop();
      var pos2 = pos+50 ;
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
    });
  });
  