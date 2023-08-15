
// banner Glide

// const slider1 = document.querySelector("#glide1");
// if (slider1) {
//     new Glide(slider1, {
//         type: 'carousel',
//         startAt: 0,
//         autoplay: 3000,
//         hoverpause: true,
//         gap: 0,
//         perView: 1,
//         animationDuration: 800,
//         AnimationTimingFunc: 'linear'
//     }).mount()
// }


$(".carousel").owlCarousel({
    loop: true,
    navClass: true,
    nav: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 1,
            nav: true,
        },
        1000: {
            items: 1,
            nav: true,
        }
    }
});

$('.owl-carousel').owlCarousel({
    loop: true,
    navClass: true,
    margin: 10,
    autoplayTimeOut: 2000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true,
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: false
        }
    }
})