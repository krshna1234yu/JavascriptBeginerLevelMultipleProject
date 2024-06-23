let currentIndex = 0;

const slides = document.querySelector('.slides');
const images = slides.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

document.getElementById('next').addEventListener('click', () => {
    moveToNextSlide();
});

document.getElementById('prev').addEventListener('click', () => {
    moveToPreviousSlide();
});

indicators.forEach(indicator => {
    indicator.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-slide')) - 1;
        moveToSlide(index);
    });
});

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function moveToPreviousSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

function moveToSlide(index) {
    currentIndex = index;
    updateSlider();
}

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentIndex].classList.add('active');
}

// Initialize the first slide
updateSlider();
