document.addEventListener("DOMContentLoaded", function() {
    const listImg = document.querySelector('.slider .list-img');
    const images = document.querySelectorAll('.slider .list-img #image');
    const dots = document.querySelectorAll('.slider .dots li');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let activeIndex = 0;
    const totalImages = images.length - 1;

    function showImage(index) {
        listImg.style.left = -index * 100 + '%';
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
    }

    prevBtn.addEventListener('click', function() {
        activeIndex = (activeIndex - 1 + totalImages + 1) % (totalImages + 1);
        showImage(activeIndex);
    });

    nextBtn.addEventListener('click', function() {
        activeIndex = (activeIndex + 1) % (totalImages + 1);
        showImage(activeIndex);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', function() {
            activeIndex = i;
            showImage(activeIndex);
        });
    });

    function autoSlide() {
        activeIndex = (activeIndex + 1) % (totalImages + 1);
        showImage(activeIndex);
    }

    let intervalId = setInterval(autoSlide, 5000);

    // Dừng auto slide khi di chuột vào slider
    listImg.addEventListener('mouseenter', function() {
        clearInterval(intervalId);
    });

    // Tiếp tục auto slide khi di chuột ra khỏi slider
    listImg.addEventListener('mouseleave', function() {
        intervalId = setInterval(autoSlide, 9000);
    });
});
