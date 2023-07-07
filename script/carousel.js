// Add this script at the end of the body tag or inside a <script> tag
document.addEventListener("DOMContentLoaded", function () {
    const carouselImages = document.querySelectorAll(".carousel-image");
    const carouselNavButtons = document.querySelectorAll(".carousel-nav button");
  
    let currentImageIndex = 0;
    let timer;
  
    // Function to show the next image in the carousel
    function showNextImage() {
      carouselImages[currentImageIndex].classList.remove("active");
      carouselNavButtons[currentImageIndex].classList.remove("active");
  
      currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  
      carouselImages[currentImageIndex].classList.add("active");
      carouselNavButtons[currentImageIndex].classList.add("active");
    }
  
    // Set up automatic image transitions
    function startImageCarousel() {
      timer = setInterval(showNextImage, 3000); // Change image every 3 seconds
    }
  
    // Stop automatic image transitions when the mouse is over the carousel
    function pauseImageCarousel() {
      clearInterval(timer);
    }
  
    // Add click event listeners to navigation buttons
    carouselNavButtons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        carouselImages[currentImageIndex].classList.remove("active");
        carouselNavButtons[currentImageIndex].classList.remove("active");
  
        currentImageIndex = index;
  
        carouselImages[currentImageIndex].classList.add("active");
        carouselNavButtons[currentImageIndex].classList.add("active");
      });
    });
  
    // Start the image carousel
    startImageCarousel();
  
    // Pause the image carousel when the mouse is over the carousel
    document.querySelector(".image-carousel").addEventListener("mouseover", pauseImageCarousel);
  
    // Resume the image carousel when the mouse leaves the carousel
    document.querySelector(".image-carousel").addEventListener("mouseout", startImageCarousel);
  });
  