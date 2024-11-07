let slideIndex = 0;
const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");
const totalSlides = slideImages.length;

// Function to show slides with a sliding effect
function showSlides() {
  slideIndex++;
  if (slideIndex === totalSlides) {
    slides.style.transition = "none"; // Remove transition for instant reset
    slideIndex = 0;
    slides.style.transform = `translateX(0)`;
    setTimeout(() => {
      slides.style.transition = "transform 1s ease"; // Reapply transition
      slideIndex++;
      slides.style.transform = `translateX(-${slideIndex * 100}vw)`;
    }, 50); // Delay to apply transition after reset
  } else {
    slides.style.transform = `translateX(-${slideIndex * 100}vw)`;
  }
}

// Automatically change slides every 3 seconds
setInterval(showSlides, 3000);

// Update Footer Icons Color on Click
document.querySelectorAll(".nav-icon").forEach((icon) => {
  icon.addEventListener("click", function () {
    // Remove 'active' class from all icons, reverting them to default color
    document.querySelectorAll(".nav-icon").forEach((i) => {
      i.classList.remove("active");
    });
    // Add 'active' class to the clicked icon to change its color
    this.classList.add("active");
  });
});
