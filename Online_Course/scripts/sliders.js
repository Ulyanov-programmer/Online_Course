/* const demoSlider = new Swiper('.demo-swiper', {
     spaceBetween: 15,
    /*

    navigation: {
        nextEl: ".nextNavButton", prevEl: ".prevNavButton",
        disabledClass: 'unactive',
    },
    pagination: {
        el: '.swiperPagination',
        clickable: true,
    },

    preloadImages: true,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevnext: true,
    },

    autoplay:{
        delay: 3000,
        stopOnLastSlide: false,
    },
    Infinite scrolling.
        loop: false,

    Changes the slider settings based on the width of the screen.
        breakpoints: {
            when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },

    Changes the height of the slider in runtime depending on the height of the slides.
        autoHeight: true,
        slidesPerView: 1,

    If there are no more than one slides, the slider stops working.
        watchOverflow: true,
        direction: 'horizontal' or 'vertical',

    Indent between slides.
        spaceBetween: 150,

    Enable parallax effect.
        parallax: true,
    For working add and set attributes on elements in slide:
        data-swiper-parallax="0" (xRight)
        data-swiper-parallax-duration="1000" (in ms)

    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    }

    Thumbs construction:
        const demosSwiper = new Swiper('.demos', {
            spaceBetween: 15,
            slidesPerView: 6,
            watchOverflow: true,
        });

        const mainSwiper = new Swiper('.main', {
            watchOverflow: true,

            thumbs: {
                swiper: demosSwiper,
                slideThumbActiveClass: 'active',
            },
        });
    */
// });
const teamSlider = new Swiper('.our-team-slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: "#our-team-slider__next-btn", prevEl: "#our-team-slider__prev-btn",
        disabledClass: 'unactive',
    },
    breakpoints: {
        900: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        550: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});
const studentsSaySlider = new Swiper('.students-say-slider', {
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
        nextEl: "#students-say-slider__next", prevEl: "#students-say-slider__prev",
        disabledClass: 'unactive',
    },
    pagination: {
        el: '.students-say-slider__pag',
    },
});
const postSlider = new Swiper('.lasted-posts__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: "#lpNextBtn", prevEl: "#lpPrevBtn",
        disabledClass: 'unactive',
    },
    breakpoints: {
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        426: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});
const coursesSlider = new Swiper('.another-courses__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: "#acNextBtn", prevEl: "#acPrevBtn",
        disabledClass: 'unactive',
    },
    breakpoints: {
        1700: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});
const eventsSlider = new Swiper('.another-events__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: "#aeNextBtn", prevEl: "#aePrevBtn",
        disabledClass: 'unactive',
    },
    breakpoints: {
        1700: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});
