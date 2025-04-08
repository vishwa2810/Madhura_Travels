
 export function initCarousel(){
    const carousel = document.getElementById('carousel');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = carousel.children.length;
    let currentIndex = 0;
    let interval;

    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle('bg-gray-800', index === currentIndex);
        dot.classList.toggle('bg-gray-400', index !== currentIndex);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    function startAutoSlide() {
      interval = setInterval(nextSlide, 3000); // Auto-scroll every 3 seconds
    }

    function resetAutoSlide() {
      clearInterval(interval);
      startAutoSlide();
    }

    document.getElementById('prev').addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });

    document.getElementById('next').addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        resetAutoSlide();
      });
    });

    updateCarousel();
    startAutoSlide(); 
 }