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

    slider.classList.add('active');

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
   HEADER DINAMICO
========================= */

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        header.style.background = '#111827';

    } else {

        header.style.background = 'rgba(15, 23, 42, 0.4)';

    }

});