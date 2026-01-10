// Hero Slider
function initHeroSlider() {
  let slides = document.querySelectorAll(".hero-slider img");
  let index = 0;

  function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
  }

  showSlide(index);

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 4000);
}

// Panggil slider saat halaman dimuat
window.onload = function() {
  initHeroSlider();
};
