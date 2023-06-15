const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const images = document.querySelectorAll('.slider img');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
});

window.onload = setInterval(function() {
    currentIndex++
    if(currentIndex == 20)
        currentIndex = 0;

    updateSlider()
}, 5000)

function updateSlider() {
    const translateValue = `translateX(-${currentIndex * 100}%)`;
    slider.style.transform = translateValue;
}