const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuClose = document.getElementById('menu-close');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
    if (!menuOpen) {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.remove('-translate-x-full');
        }, 10);
        menuToggle.children[0].classList.add('transform', 'rotate-45', 'translate-y-2.5');
        menuToggle.children[1].classList.add('opacity-0');
        menuToggle.children[2].classList.add('transform', '-rotate-45', '-translate-y-2.5');
        menuOpen = true;
    } else {
        closeMenu();
    }
});




$(document).ready(function() {
   
    $("#header-placeholder").load("header.html");
    $("#footer-placeholder").load("footer.html");

 
    $(document).on('click', '#menu-open', function() {
        $('.mobile-menu').addClass('open');
    });

    $(document).on('click', '#menu-close', function() {
        $('.mobile-menu').removeClass('open');
    });
});


menuClose.addEventListener('click', () => {
    closeMenu();
});

function closeMenu() {
    mobileMenu.classList.add('-translate-x-full');
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300);
    menuToggle.children[0].classList.remove('transform', 'rotate-45', 'translate-y-2.5');
    menuToggle.children[1].classList.remove('opacity-0');
    menuToggle.children[2].classList.remove('transform', '-rotate-45', '-translate-y-2.5');
    menuOpen = false;
}
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

setInterval(nextSlide, 5000);

$(document).ready(function() {
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});