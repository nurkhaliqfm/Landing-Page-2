$(window).on("load",function(){
    /*----------- Preloader ------------*/
    $(".preloader").fadeOut("slow")
});

$(document).ready(function() {
    /*----------- Navbar Shrink ------------*/
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink")
        }
        else{
            $(".navbar").removeClass("navbar-shrink")

        }
    });

    /*----------- Footer Instagram Button ------------*/
    $(".instagram-open-btn").on("click", function(){
        window.open('http://bit.ly/instagramlemota')
    });

    /*----------- Footer Whatsapp Button ------------*/
    $(".whatsapp-open-btn").on("click", function(){
        window.open('http://bit.ly/Orderlemota')
    });

    /*----------- Footer Facebook Button ------------*/
    $(".facebook-open-btn").on("click", function(){
        window.open('https://web.facebook.com/lemotacoid')
    });

    /*----------- Home Carousel ------------*/
    $('.home-carousel').owlCarousel({
        dots:false,
        loop:true,
        margin:0,
        rtl:true,
        responsiveClass:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    })

    /*----------- Tentang Carousel ------------*/
    $('.tentang-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    })

    /*----------- Produk Kami Carousel ------------*/
    $('.produk-carousel').owlCarousel({
        dots:false,
        loop:true,
        margin:0,
        responsiveClass:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:2,
            }
        }
    })

    /*----------- Testimoni Carousel ------------*/
    $('.testimoni-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    })

    /*----------- Page Scrolling - ScrollIt ---------*/
    $.scrollIt({
        topOffset: -50
    });

    /*----------- Navbar Collapse ---------*/
    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide")
    });
});