let hovered = false;

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("header__menu-toggle");
    const menu = document.querySelector(".header__nav--list");
    const path = location.pathname;

    let video = document.getElementById("luxuryVideo");
    if(path === "/index.html" || path === "/about.html"){
        video.controls = false;

        $('.play-button').click(function() {
            if (video.paused) {
                video.play();
            }
        });

        $('#luxuryVideo').click(function() {
            if (video.paused) {
                video.play();
            }
        });

        video.addEventListener('play', function() {
            video.controls = true;
            $(".play-button").css("display", "none")
        });

        video.addEventListener('pause', function() {
            video.controls = false;
            $(".play-button").css("display", "block")
        });
    }

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", function() {
            menuToggle.checked = false;
        });
    });

    document.addEventListener("click", (event) => {
        const target = event.target;
        if (!target.closest(".header__nav") && menuToggle.checked) {
            menuToggle.checked = false;
        }
    });

    $(document).ready(function() {
        let lastScrollTop = 0;
        let navbarHeight = $('.header').outerHeight();
    
        $(window).scroll(function() {
            if($(window).width() > 1000) {
                let toTop = $(this).scrollTop();
        
                if (toTop > lastScrollTop && toTop > navbarHeight) {
                    $('.header').css('transform', 'translate3d(0, -200px, 0');
                } else {
                    $('.header').css('transform', 'unset');
                }
                lastScrollTop = toTop;
            }
        });

        $(document).mousemove(function(event) {
            if($(window).width() > 1000) {
                let mouseY = event.clientY;
                if(mouseY < 200) {
                    $('.header').css('transform', 'unset');
                } else {
                    let toTop = $(window).scrollTop();
                    if(toTop > navbarHeight) {
                        $('.header').css('transform', 'translate3d(0, -200px, 0');
                    }
                }
            }
        })
    });
});

const roomSwiper = new Swiper("#rooms-swiper", {
    grabCursor: true,
    spaceBetween: 40,
    slidesPerView: 1,
    initialSlide: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1000: {
            spaceBetween: 30,
            addSlidesBefore: 1,
            slidesPerView: 3,
            centeredSlides: true,
        }
    }
});

const roomSwiperNormal = new Swiper("#rooms-swiper-normal", {
    grabCursor: true,
    spaceBetween: 40,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1000: {
            spaceBetween: 30,
            initialSlide: 1,
            slidesPerView: 3,
            centeredSlides: true,
        }
    }
});

const coreFeaturesSwiper = new Swiper('#coreFeatures-swipper', {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1000: {
            slidesPerView: 3,
            grid: {
                rows: 2,
                fill: 'row',
            },
            spaceBetween: 100,
        }
    }
});

const coreFeaturesSwiperBlack = new Swiper('#coreFeatures-swipper-black', {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1000: {
            slidesPerView: 3,
            grid: {
                rows: 2,
                fill: 'row',
            },
            spaceBetween: 25,
        }
    }
});

const foodMenuSwipper = new Swiper('#menu-swipper', {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
            spaceBetween: 100,
            autoHeight: true,
        }
    }
});

const foodImageSwipper = new Swiper('#images-swipper', {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1000: {
            slidesPerView: 3,
            spaceBetween: 20,
            autoHeight: true,
        }
    }
});

const aboutSwiper = new Swiper('#counter-swipper', {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
            spaceBetween: 20,
            autoHeight: true,
        }
    }
});