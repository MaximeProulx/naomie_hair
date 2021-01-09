(function ($) {
    'use strict';

    var browserWindow = $(window);
 
    var token = 'IGQVJWWVU4bVFyN2lhcGRHN1hNYVNXMS1MTG1GXzI5cno2djRja1lLdFVwN05FOEtIOUt1ZAnJGOWpraDh3ZAVVTZAkFXVUlwS3ZAyaTh5WmxxNEs1ZA3drX1gyV21xNEl6MF9hWElhb2d0Wm8wZA2pqS3ZAkZAgZDZD&fbclid=IwAR1SSLYtBpgU8_yEAoFSD6nXV4YLdSPPmGuTEvKKfITE1VDHs-R3YG1_QGA'; // learn how to obtain it be going back
    if(window.screen.width<500){
        var num_photos = 16; // how much photos do you want to get
        var num_hide = 8; // how much photos do you want to get
    }else{
        var num_photos = 28; // how much photos do you want to get
        var num_hide = 12; // how much photos do you want to get
    }
        
    $.ajax({
        url: 'https://graph.instagram.com/me/media', // or /users/self/media/recent for Sandbox
        dataType: 'json',
        type: 'GET',
        data: {access_token: token, fields: "id, media_type, media_url"},
        success: function(data){
            console.log(data);
            for( var x =0; x< data.data.length;x++  ){
                if(x<num_hide){
                $('.notHidenPics').append('<div class="col-12 col-sm-6 col-lg-3 single-portfolio-area web brand wow fadeInUp" data-wow-delay="100ms">'+
                '<img src="'+data.data[x].media_url+'" href="'+data.data[x].media_url+'"class="img-url" alt="">'+
                '<div class="portfolio-content"> </div></div>'); 
                }else{
                    $('.hidden').append('<div class="col-12 col-sm-6 col-lg-3 single-portfolio-area web brand wow fadeInUp " data-wow-delay="100ms">'+
                    '<img src="'+data.data[x].media_url+'" href="'+data.data[x].media_url+'"class="img-url" alt="">'+
                    '<div class="portfolio-content"> </div></div>'); 
                }
              
            }
           
              getMedia();
        },
        error: function(data){
            console.log(data); // send the error notifications to console
        }
    });

    function getMedia() {
        $.ajax({
            url: 'https://api.instagram.com/v1/users/self', // or /users/self/media/recent for Sandbox
            dataType: 'jsonp',
            type: 'GET',
            data: {access_token: token, count: num_photos},
            success: function(data){
                console.log(data);
                $('.jsNbPics').append(data.data.counts.media);
                $('.jsFollowers').append(data.data.counts.followed_by);
                after();
            },
            error: function(data){
                console.log(data); // send the error notifications to console
            }
        });
    }

    

    function after() {
        // :: 1.0 Preloader Active Code
        browserWindow.on('load', function () {
            setTimeout(function(){
             $('.hidden').hide();
            $('.see-less').hide();
            $('#preloader').fadeOut('slow', function () {
                $(this).remove();
            });
            }, 2000);
            
        });

        // :: 2.0 Nav Active Code
        if ($.fn.classyNav) {
            $('#vcardNav').classyNav();
        }

        // :: 3.0 Masonary Gallery Active Code
        if ($.fn.imagesLoaded) {
            $('.vcard-portfolio').imagesLoaded(function () {
                // filter items on button click
                $('.portfolio-menu').on('click', 'button', function () {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue
                    });
                });
                // init Isotope
                var $grid = $('.vcard-portfolio').isotope({
                    itemSelector: '.single-portfolio-area',
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.single-portfolio-area'
                    }
                });
            });

        }

        $('.see-more').on('click', function () {
            $('.hidden').show();
            $('.see-more').hide();
            $('.see-less').show();


        })

        $('.see-less').on('click', function () {
            $('.hidden').hide();
            $('.see-less').hide();
            $('.see-more').show();
        })

        // :: 4.0 Gallery Menu Style Active Code
        $('.portfolio-menu button.btn').on('click', function () {
            $('.portfolio-menu button.btn').removeClass('active');
            $(this).addClass('active');
        })

        // :: 5.0 Mobile Menu Active Code
        $('.nav-toggle').on('click', function () {
            $('.vcard-nav').toggleClass('on');
        })
        $('.vcard-nav').on('click', function () {
            $(this).removeClass('on');
        })

        // :: 6.0 Image Popup Active Code
        if ($.fn.magnificPopup) {
            $('.img-url').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }

        // :: 7.0 ScrollUp Active Code
        if ($.fn.scrollUp) {
            browserWindow.scrollUp({
                scrollSpeed: 1500,
                scrollText: '<i class="fa fa-angle-up"></i>'
            });
        }

        // :: 8.0 CouterUp Active Code
        if ($.fn.counterUp) {
            $('.counter').counterUp({
                delay: 10,
                time: 2000
            });
        }

        // :: 9.0 Testimonials Slides Active Code
        if ($.fn.owlCarousel) {
            $(".testimonial-slides").owlCarousel({
                items: 3,
                loop: true,
                center: true,
                autoplay: true,
                smartSpeed: 1500,
                margin: 30,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsive: {
                    320: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            })
        }

        // :: 10.0 Sticky Active Code
        browserWindow.on('scroll', function () {
            if (browserWindow.scrollTop() > 0) {
                $('.header-area').addClass('sticky');
            } else {
                $('.header-area').removeClass('sticky');
            }
        });

        // :: 11.0 wow Active Code
        if (browserWindow.width() > 767) {
            new WOW().init();
        }

        // :: 12.0 Progress Bar Active Code
        if ($.fn.circleProgress) {
            $('#circle').circleProgress({
                size: 180,
                emptyFill: "rgba(0, 0, 0, .0)",
                fill: '#f9dcd4',
                thickness: '16',
                reverse: true
            });
            $('#circle2').circleProgress({
                size: 180,
                emptyFill: "rgba(0, 0, 0, .0)",
                fill: '#f9dcd4',
                thickness: '16',
                reverse: true
            });
            $('#circle3').circleProgress({
                size: 180,
                emptyFill: "rgba(0, 0, 0, .0)",
                fill: '#f9dcd4',
                thickness: '16',
                reverse: true
            });
            $('#circle4').circleProgress({
                size: 180,
                emptyFill: "rgba(0, 0, 0, .0)",
                fill: '#f9dcd4',
                thickness: '16',
                reverse: true
            });
        }

        // :: 13.0 onePageNav Active Code
        if ($.fn.onePageNav) {
            $('#vcardMenu').onePageNav({
                currentClass: 'active',
                scrollSpeed: 2000,
                easing: 'easeOutQuad'
            });
        }

        // :: 14.0 Nice Scroll Active Code
        if ($.fn.niceScroll) {
            $(".page-content").niceScroll({
                cursorborder: "0 solid transparent",
            });
        }

        // :: 15.0 Tooltip Active Code
        if ($.fn.tooltip) {
            $('[data-toggle="tooltip"]').tooltip();
        }

        // :: 16.0 prevent default a click
        $('a[href="#"]').on('click', function ($) {
            $.preventDefault()
        });
    }
})(jQuery);
