// Magnific Popup
$(document).ready(function() {
    $('.lightbox').magnificPopup({
        type:'image',
        image: {
            titleSrc: function(item) {
                var res = '';
                if (typeof item.el.attr('title') !== typeof undefined && item.el.attr('title') !== '') {
                    res = res + '<span class="image-title">' + item.el.attr('title') + '</span>';
                }
                if (typeof item.el.attr('data-image-description') !== typeof undefined && item.el.attr('data-image-description') !== '') {
                    if (typeof item.el.attr('title') !== typeof undefined && item.el.attr('title') !== '') {
                        res = res + ' &nbsp;&middot;&nbsp; ';
                    }
                    res = res + '<span class="image-description">' + item.el.attr('data-image-description') + '</span>';
                }
                return res;
            },
        },
        gallery: {
            enabled:true,
            tPrev: 'zurück (linke Pfeiltaste)',
            tNext: 'weiter (rechte Pfeiltaste)',
            tCounter: '<span class="mfp-counter">%curr% von %total%</span>'
        }
    });
});

// Slick Slider
$('.slider').each(function(){
    let slidestoshow = $(this).attr('data-slidestoshow');
    $(this).slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToScroll: 1,
        adaptiveHeight: false,
        slidesToShow: slidestoshow,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    var stHeight = $(this).find('.slick-track').height();
    $(this).find('.slick-slide').css('height',stHeight + 'px' );
})
