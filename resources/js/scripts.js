$(document).ready(function () {
    //for sticky nav 
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    //scrolls on buttons
    $('.js-plan-scroll').click(function () {
        $('html,body').animate({
            scrollTop: $('.section-plans').offset().top
        }, 1000);
    });
    $('.js-scroll-start').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });
    //nav scroll
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //animations on scroll
    $('.js-wp-1').waypoint(function (direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.app-screen').waypoint(function (direction) {
        $('.app-screen').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    $('.cities .row .col').waypoint(function (direction) {
        $('.cities .row .col').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    $('.plan-box').waypoint(function (direction) {
        $('.plan-box').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    //mobile nav
    $('.js-nav').click(function () {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav i');
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            
            nav.css("display", "block");
        }
        else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            nav.css("display", "none");
        }
    });
    
    $(window).resize(function(){

var nav = $('.js-main-nav');

var icon = $('.js-nav i');

if ($(window).width() > 767){

nav.css("display", "block");

icon.addClass('ion-close-round');

icon.removeClass('ion-navicon-round');

} else {

nav.css("display", "none");

icon.addClass('ion-navicon-round');

icon.removeClass('ion-close-round');

}

});
    
    
    
    
    var map =new GMaps({
        div: '.map',
        lat: 38.7438735,
        lng: -9.05,
        zoom:12
});
    
   map.addMarker({
        lat: 38.7438735,
        lng: -9.1602037,
        title:'Lisbon',
       infoWindow: {
  content: '<p> Lisbon HQ</p>'
}
        
    });
    
    
    
}); //end of .ready