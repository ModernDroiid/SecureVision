/* =========================
   SLIDER AUTOMATICO
========================= */

const slider = document.getElementById('slider');

/* CLONAR TARJETAS */

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    const clone = card.cloneNode(true);

    slider.appendChild(clone);

});

/* =========================
   MOVIMIENTO AUTOMATICO
========================= */

let scrollSpeed = 1;

function autoScroll() {

    slider.scrollLeft += scrollSpeed;

    /* LOOP INFINITO */

    if (slider.scrollLeft >= slider.scrollWidth / 2) {

        slider.scrollLeft = 0;

    }

    requestAnimationFrame(autoScroll);

}

/* INICIAR */

autoScroll();

/* =========================
   PAUSA HOVER
========================= */

slider.addEventListener('mouseenter', () => {

    scrollSpeed = 0;

});

slider.addEventListener('mouseleave', () => {

    scrollSpeed = 1;

});

/* =========================
   DRAG CON MOUSE
========================= */

let isDown = false;

let startX;

let scrollLeft;

slider.addEventListener('mousedown', (e) => {

    isDown = true;

    startX = e.pageX - slider.offsetLeft;

    scrollLeft = slider.scrollLeft;

});

slider.addEventListener('mouseleave', () => {

    isDown = false;

});

slider.addEventListener('mouseup', () => {

    isDown = false;

});

slider.addEventListener('mousemove', (e) => {

    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;

    const walk = (x - startX) * 2;

    slider.scrollLeft = scrollLeft - walk;

});

/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll('.reveal');

function revealSections() {

    const triggerBottom =
    window.innerHeight * 0.85;

    reveals.forEach(section => {

        const sectionTop =
        section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){

            section.classList.add('active');

        }

    });

}

window.addEventListener(
    'scroll',
    revealSections
);

revealSections();

/* =========================
   HEADER EFFECT
========================= */

const header =
document.querySelector('header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        header.classList.add('scrolled');

    } else {

        header.classList.remove('scrolled');
    }

});

/* =========================
   MOBILE MENU
========================= */

const menuToggle =
document.querySelector('.menu-toggle');

const nav =
document.querySelector('nav');

menuToggle.addEventListener('click', () => {

    nav.classList.toggle('active');

});

/* =========================
   SUBMENU MOBILE
========================= */

const servicesToggle =
document.querySelector('.services-toggle');

const dropdownContent =
document.querySelector('.dropdown-content');

servicesToggle.addEventListener('click', (e) => {

    e.preventDefault();

    dropdownContent.classList.toggle('active');

});

/* =========================
   CLOSE MENU CLICK OUTSIDE
========================= */

document.addEventListener('click', (e) => {

    /* SI EL CLICK NO ES EN EL MENU */

    if(
        !nav.contains(e.target) &&
        !menuToggle.contains(e.target)
    ){

        nav.classList.remove('active');

        dropdownContent.classList.remove('active');
    }

});

const dropdownLinks =
document.querySelectorAll('.dropdown-link');

dropdownLinks.forEach(link => {

    link.addEventListener('click', () => {

        nav.classList.remove('active');

        dropdown.classList.remove('active');
    });

});