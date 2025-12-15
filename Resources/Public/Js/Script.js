$(document).ready(function($) {

    "use strict";

    // scroll
    var scrollWindow = function() {
        $(window).scroll(function(){
            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.navbar'),
                sd = $('.js-scroll-wrap');

            if (st > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }

            if (st > 150) {
                if ( !navbar.hasClass('scrolled') ) {
                    navbar.addClass('scrolled');
                }
            }
            if (st < 150) {
                if ( navbar.hasClass('scrolled') ) {
                    navbar.removeClass('scrolled sleep');
                }
            }
            if ( st > 350 ) {
                if ( !navbar.hasClass('awake') ) {
                    navbar.addClass('awake');
                }

                if(sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if ( st < 350 ) {
                if ( navbar.hasClass('awake') ) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if(sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();

    // to top button
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // navigation
    var navbarHeight = $(".navbar").height() + 15;
    var height = $(window).scrollTop();

    if(height  > 0) {
        var scrollto = height - navbarHeight;
        $('html, body').animate({scrollTop:scrollto}, 0);
    }

    var OnePageNav = function() {
        $("ul.navbar-nav li a").on('click', function() {
            if (this.hash !== "") {
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - navbarHeight
                }, 800);
                $('#mainmenu').collapse('hide');
                return false;
            }
        });
    };
    OnePageNav();

});