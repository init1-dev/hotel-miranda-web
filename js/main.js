let video;
let hovered = false;

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
}

const playVideo = () => {
    if(video !== ''){
        video.addEventListener('click', function() {
            if(video !== ''){
                if(video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("header__menu-toggle");
    const menu = document.querySelector(".header__nav--list");

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
        let hovered = false;
    
        $(window).scroll(function() {
            if($(window).width() > 1000) {
                let toTop = $(this).scrollTop();
        
                if (toTop > lastScrollTop && toTop > navbarHeight) {
                    $('.header').css('opacity', '0');
                } else {
                    $('.header').css('opacity', '1');
                }
                lastScrollTop = toTop;
            }
        });
    
        $(".header").mouseenter(function() {
            hovered = true;
            $('.header').css('opacity', '1');
        });
    
        $(".header").mouseleave(function() {
            hovered = false;
            let toTop = $(window).scrollTop();
            if (toTop > navbarHeight) {
                $('.header').css('opacity', '0');
            }
        });
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