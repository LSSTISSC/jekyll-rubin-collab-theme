particlesJS("intro", {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":800}},
                                    "color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},
                                    "polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},
                                    "opacity":{"value":1.,"random":true,
                                    "anim":{"enable":true,"speed":5,"opacity_min":0.1,"sync":false}},
                                    "size":{"value":1.5,"random":true,"anim":{"enable":true,"speed":10,"size_min":0.2,"sync":false}},
                                    "line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
                                    "move":{"enable":true,"speed":0.1,"direction":"none","random":false,"straight":false,"out_mode":"out",
                                    "bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
                                    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},
                                    "onclick":{"enable":true,"mode":"push"},"resize":true},
                                    "modes":{"grab":{"distance":97.44926547616143,"line_linked":{"opacity":1}},
                                    "bubble":{"distance":243.62316369040352,"size":2.,"duration":2,"opacity":1,"speed":3},
                                    "repulse":{"distance":60.,"duration":5.},"push":{"particles_nb":1},"remove":{"particles_nb":2}}},
                                    "retina_detect":true});

    function effectsHomeSection(homeSection, scrollTopp) {
            if (homeSection.length > 0) {
                var homeSHeight = homeSection.height();
                var topScroll = $(document).scrollTop();
                if ((homeSection.hasClass('home-parallax')) && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                    homeSection.css('height', (855 - topScroll * 0.55));
                    homeSection.css('top', (topScroll * 0.55));
                }
                if (homeSection.hasClass('home-fade') && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                    var caption = $('.caption-content');
                    caption.css('opacity', (1 - topScroll/homeSection.height() * 1));
                }
            }
        }

    function navbarAnimation(navbar, homeSection, navHeight) {
        var topScroll = $(window).scrollTop();
        if (navbar.length > 0 && homeSection.length > 0) {
            if(topScroll >= navHeight) {
                navbar.removeClass('navbar-transparent');
            } else {
                navbar.addClass('navbar-transparent');
            }
        }
    }

(function(){
$(document).ready(function() {

        var homeSection = $('.home-section');
        var navbar = $('.navbar');
        var navHeight   = navbar.height();

        $(window).scroll(function() {
            effectsHomeSection(homeSection, this);
            navbarAnimation(navbar, homeSection, navHeight);
        });
});
})(jQuery);
