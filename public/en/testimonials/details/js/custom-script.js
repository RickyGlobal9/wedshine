jQuery(document).ready(function($) {
    'use strict';

    /* menu js **/

    if ($(".dropdown-menu a.dropdown-toggle").length) {

        $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');

            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show').removeClass("show");
            });

            return false;
        });

    }


    if ($('.header-transparent').length) {

        $(window).scroll(function() {
            if ($(".header-transparent").offset().top > 200) {
                $(".header-transparent").addClass("header-collapse");
            } else {
                $(".header-transparent").removeClass("header-collapse");
            }
        });

    }


    /* Calender jQuery **/

    if ($("#weddingdate, #taskdate").length) {

        $("#weddingdate, #taskdate").datepicker({ minDate: "+1", maxDate: "+1Y +3M" });
        $('#ui-datepicker-div').before('<div class="default-skin"></div>');
        $('#ui-datepicker-div').appendTo('.default-skin').contents();
    }

    /*--- select option effect ----*/

    if ($('select').length) {


        $(document).ready(function() {
            $('select').niceSelect();
            FastClick.attach(document.body);
        });



    }

    /* Multiple Carousel **/


    if ($('.owl-venue-thumb, .owl-venue-thumb-second, .owl-second, .owl-slider, .post-owl').length) {

        $('.owl-venue-thumb').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            Item_Width: 100,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,

                },
                600: {
                    items: 2,

                },
                1000: {
                    items: 4,

                },
                1200: {
                    items: 5,

                },
                1400: {
                    items: 5,

                },
                1600: {
                    items: 5,

                },
                1800: {
                    items: 5,

                }
            }
        });
        $('.owl-venue-thumb-second').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            Item_Width: 100,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,

                },
                600: {
                    items: 2,

                },
                1000: {
                    items: 4,

                },
                1200: {
                    items: 3,

                },
                1400: {
                    items: 3,

                },
                1600: {
                    items: 3,

                },
                1800: {
                    items: 3,

                }
            }
        });


        $('.owl-second').owlCarousel({

            loop: true,
            margin: 5,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });

        $('.owl-slider').owlCarousel({

            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });


        $('.post-owl').owlCarousel({

            loop: true,
            margin: 5,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });



    }

    /* POP UP Gallery jQuery **/


    if ($('#open-popup').length) {


        $('#open-popup').magnificPopup({
            items: [{
                    src: 'images/wedding-gallery-img-1.jpg',
                    title: 'Venue locations #1'
                },
                {
                    src: 'images/wedding-gallery-img-2.jpg',
                    title: 'Venue locations #2'
                },

                {
                    src: 'images/wedding-gallery-img-3.jpg',
                    title: 'Venue locations #3'
                },


            ],
            gallery: {
                enabled: true
            },
            type: 'image' // this is a default type
        });

    }
    /* accordions jQuery **/

    if ($('.collapse').length) {

        $('.collapse').on('shown.bs.collapse', function() {
            $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
        }).on('hidden.bs.collapse', function() {
            $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
        });

        $('.panel-heading a').click(function() {
            $('.panel-heading').removeClass('active');

            //If the panel was open and would be closed by this click, do not active it
            if (!$(this).closest('.panel').find('.panel-collapse').hasClass('in'))
                $(this).parents('.panel-heading').removeClass("fa-plus").addClass('active');
        });

    }
    /* dashboard side menu show and open jQuery  **/
    if ($('#icon-toggle').length) {

        $(function() {
            var plus = $('#icon-toggle');
            var btn = $('button')
            $("button").click(function() {
                plus.toggleClass("fa fa-times fa fa-bars");
            });
        });





    }
    /* dashboard slide panel jQuery  **/
    if ($('#slide-panel').length) {

        $('#slide-panel').slideReveal({
            trigger: $("#trigger"),
            position: "right",
            push: false,
            overlay: true,
            width: 275,
            speed: 450,
            overlay: true
        });




    }
    /* dashboard summernote jQuery  **/
    if ($('#summernote').length) {

        $(document).ready(function() {
            $('#summernote').summernote({
                height: 300

            });
        });



    }


    
if ($('.notification-list').length) {

     $('.notification-list').slimScroll({
            height: '250px'
        });
}
/*--- accordion js (plus-minus) ----*/

    if ($('.collapse').length) {


        $('.collapse').on('shown.bs.collapse', function() {
            $(this).parent().find(".fa-plus-circle").removeClass("fa-plus-circle").addClass("fa-minus-circle");
        }).on('hidden.bs.collapse', function() {
            $(this).parent().find(".fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle");
        });

        $('.card-header a').click(function() {
            $('.card-header').removeClass('active');

            //If the panel was open and would be closed by this click, do not active it
            if (!$(this).closest('.card').find('.collapse').hasClass('in'))
                $(this).parents('.card-header').addClass('active');
        });



    }

    /* accordion (circle arrow) **/


    if ($('.collapse').length) {

        $('.collapse').on('shown.bs.collapse', function() {
            $(this).parent().find(".fa-chevron-circle-down").removeClass("fa-chevron-circle-down").addClass("fa-chevron-circle-up");
        }).on('hidden.bs.collapse', function() {
            $(this).parent().find(".fa-chevron-circle-up").removeClass("fa-chevron-circle-up").addClass("fa-chevron-circle-down");
        });

        $('.card-header a').click(function() {
            $('.card-header').removeClass('active');

            //If the panel was open and would be closed by this click, do not active it
            if (!$(this).closest('.card').find('.collapse').hasClass('in'))
                $(this).parents('.card-header').addClass('active');
        });



    }

    /* accordion js (arrow) **/


    if ($('.collapse').length) {


        $('.collapse').on('shown.bs.collapse', function() {
            $(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
        }).on('hidden.bs.collapse', function() {
            $(this).parent().find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
        });

        $('.card-header a').click(function() {
            $('.card-header').removeClass('active');

            //If the panel was open and would be closed by this click, do not active it
            if (!$(this).closest('.card').find('.collapse').hasClass('in'))
                $(this).parents('.card-header').addClass('active');
        });

    }


    /* accordion js (plus-minus-outline) **/



}); // AND OF JQUERY