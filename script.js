'use strict'

// SMOOTH SCROLL TO ANCHOR
document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = 0; // нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// SLIDER FUNCTIONALITY
let currentSlide = 0;
const slides = document.querySelectorAll('.slide-img');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].style.left = direction === 1 ? '-100%' : '100%';

    currentSlide += direction;

    // Зацикливание слайдов
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].style.left = '0';
    slides[currentSlide].classList.add('active');
}

slides[currentSlide].classList.add('active');

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

// POPUP FUNCTIONALITY
const popUp = document.getElementById('popUp');
const button = document.getElementById('formButton');

// Открытие всплывающего окна
button.onclick = () => {
    popUp.style.display = 'flex';
};

// Закрытие всплывающего окна при клике на него
popUp.onclick = () => {
    popUp.style.display = 'none';
};