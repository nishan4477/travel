$(window).scroll(function()
{

    if($(this).scrollTop()>200)
    {
        $(".navbar").addClass("sticky")&&  $(".navbar").removeClass("bg-body-tertiary")
    }
    else{
        $('.navbar').removeClass("sticky") && $(".navbar").addClass("bg-body-tertiary")
    }
}


)


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})