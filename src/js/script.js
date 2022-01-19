const md = new MobileDetect(window.navigator.userAgent);

//Animate
new WOW().init({
    mobile: false,
});

//Parallax
new simpleParallax(document.querySelectorAll('.rellax'), {
    scale: 1.3,
    overflow: true
});

// mobile and tablet menu
const openMobileMenuButton = document.querySelector('.headerMenu__trigger'),
    closeMobileMenuButton = document.querySelector('.headerMenu__close'),
    mobileMenu = document.querySelector('.headerMenu'),
    bodyElement = document.querySelector('body');

openMobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    bodyElement.classList.add('disableScroll');
});

closeMobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    bodyElement.classList.remove('disableScroll');
});


// anchors and intersection observer
const anchors = document.querySelectorAll('a[data-menu-item]');
const anchorsHeader = document.querySelectorAll('a.menu__link[data-menu-item]');
const sections = document.querySelectorAll('div.section');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href');

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        if (md.tablet() || md.mobile()) {
            mobileMenu.classList.remove('active');
            bodyElement.classList.remove('disableScroll');
        }
    })
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            anchorsHeader.forEach(el => el.classList.remove("active"));
            document.querySelectorAll(`a[data-menu-item=${entry.target.id}]`)[0].classList.add('active');
        }
    });
});

sections.forEach(target => observer.observe(target));
