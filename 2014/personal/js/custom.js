/* 
 * Theme: Codeon - one page responsive template built for humans.
 * Version: v1.1
 * Author:  Design_mylife
 * Created on : May 31, 2014, 10:42:39 AM(india)
 * file: custome js(editable)
 */

/* ==============================================
 Contact form
 =============================================== */
function sendMessage() {

    var _name = jQuery("#name").val(),
        _email = jQuery("#email").val(),
        _subject = jQuery("#subject").val(),
        _website = jQuery("#website").val(),
        _message = jQuery("#message").val();

    jQuery.ajax({
        type: "POST",
        url: 'http://diegoramos.me:4500/sendEmail',
        data: {name: _name, email: _email, subject: _subject, website: _website, message: _message},
        success: function (res) {

            if (res && res.status.cod == 200) {
                jQuery("#name").val('');
                jQuery("#email").val('');
                jQuery("#subject").val('');
                jQuery("#website").val('');
                jQuery("#message").val('');

                $("#messages").html('<div class="alert alert-success alert-dismissible" role="alert">' +
                        '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                        'Message sent, i will return as soon as possible' + '</div>'
                );

            } else {
                $("#messages").html('<div class="alert alert-warning alert-dismissible" role="alert">' +
                        '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                        'A problem occurred during sent message' +  '</div>'
                );
            }

        },
        error: function (err) {
            $("#messages").html('<div class="alert alert-danger alert-dismissible" role="alert">' +
                    '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                    'A problem occurred during sent message' +  '</div>'
            );
        }

    });

}

/* ==============================================
portfolio gallery slide
=============================================== */
$(window).load(function() {
    $('.portfolio-slide').flexslider({
        slideshowSpeed: 5000,
        directionNav: false,
        animation: "fade",
        controlNav:true
    });
});




/* ==============================================
Sticky Navbar
=============================================== */

$(document).ready(function(){
    $(".navbar").sticky({topSpacing:0});
});




/* ==============================================
Auto Close Responsive Navbar on Click
=============================================== */

function close_toggle() {
if ($(window).width() <= 768) {
  $('.navbar-collapse a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
}
else {
 $('.navbar .navbar-default a').off('click');
}
}
close_toggle();

$(window).resize(close_toggle); 


    
/* ==============================================
Smooth Scroll To Anchor
=============================================== */

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.navbar a,.btn').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
    


/*=========================*/
     /*========portfolio mix====*/
     /*==========================*/
    $('#grid').mixitup();
    
       /*=========================*/
     /*========tooltip and popovers====*/
     /*==========================*/
    $("[data-toggle=popover]").popover();
    
    $("[data-toggle=tooltip]").tooltip();


/*=========================*/
     /*========Animation on scroll with wow.js====*/
     /*==========================*/
     
   wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        mobile:       true
      }
    );
    wow.init();

/************parallax*********************/
$(function(){
			$.stellar({
				horizontalScrolling: false
			});
		});


/****************************version v1.1*********************/
// niceScroll
jQuery("html").niceScroll({
    scrollspeed: 50,
    mousescrollstep: 38,
    cursorwidth: 7,
    cursorborder: 0,
    cursorcolor: '#35bdf6',
    autohidemode: false,
    zindex: 9999999,
    horizrailenabled: false,
    cursorborderradius: 0
});

/* ==============================================
 Counter Up
 =============================================== */
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 100,
        time: 800
    });
});


