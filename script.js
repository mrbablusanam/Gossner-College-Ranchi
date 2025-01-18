const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

function showNextImage() {
    // Remove "active" class from the current image
    images[currentIndex].classList.remove('active');

    // Update the index for the next image
    currentIndex = (currentIndex + 1) % images.length;

    // Add "active" class to the next image
    images[currentIndex].classList.add('active');
}

// Initially show the first image
images[currentIndex].classList.add('active');

// Change image every 3 seconds
setInterval(showNextImage, 3000);
