const slides = document.querySelectorAll(".slide");
let currentSlide = 0;


function showSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });
}


document.getElementById("nextButton").addEventListener("click", function () {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide();
});


showSlide();