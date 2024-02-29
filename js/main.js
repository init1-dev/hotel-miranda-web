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

    const video = document.querySelector('.luxuryPlace__video') || '';

    if(video !== ''){
        video.addEventListener('click', function() {
            if(location.href.split('5500/')[1] === 'index.html'){
                if(video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            }
        });
    }

    function loadPage(url) {
        const uniqueTimeParam = new Date().getTime();
        const newUrl = url + '?time=' + uniqueTimeParam;
        const pageContent = document.getElementById('page-content');

        pageContent.classList.add('loading');
        
        fetch(newUrl)
            .then(response => response.text())
            .then(html => {
                pageContent.innerHTML = html;

                document.getElementById('page-content').innerHTML = html;
                initializeSwiper();
            });
    }
    
    function initializeSwiper() {
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
    }

    loadPage('home.html')
    
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loadPage(this.href);
        });
    });

});

