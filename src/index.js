window.addEventListener('DOMContentLoaded', function() {

  document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('open-burger');
  document.body.classList.toggle('modal-open-body');
  document.querySelector('.main').classList.toggle('modal-open-main');
  document.querySelector('.menu-wrapper').classList.toggle('open');
  document.querySelector('.nav-menu').classList.toggle('open');
  document.querySelector('.menu-ul').classList.toggle('open');
  })


  const moreButton = document.querySelector('.more');
  const submenu = moreButton.querySelector('.submenu');
  let timer;

  moreButton.addEventListener('mouseover', function() {

    clearTimeout(timer);
    submenu.style.display = 'block';

    setTimeout(function() {
      submenu.style.opacity = '1';
    }, 10);

  });

  moreButton.addEventListener('mouseout', function(event) {

    if (!moreButton.contains(event.relatedTarget) || !submenu.contains(event.relatedTarget)) {

      submenu.style.opacity = '0';

      timer = setTimeout(function() {
        submenu.style.display = 'none';
      }, 300);
  
    }
  });
  
  submenu.addEventListener('mouseover', function() {

    clearTimeout(timer);

  });


  function setBackgroundPosition() {

    if (window.innerWidth > 1100) {

      var width = -((1920 - window.innerWidth) / 2);
      document.querySelector('.bg-vector').style.backgroundPosition = width + 'px 149px';

    }
  }

  setBackgroundPosition();

  window.addEventListener('resize', function() {

      setBackgroundPosition();
      
  });


  const sliderContainers = document.querySelectorAll(".slider-container");

  sliderContainers.forEach(function(container) {
  const slider = container.querySelector(".slider");
  const slides = slider.querySelectorAll(".slide");
  const prevBtn = container.querySelector(".prev-button");
  const nextBtn = container.querySelector(".next-button");

  let currentIndex = 0;
  let numVisibleSlides = 3;

  function updateSliderWidth() {
    if (window.innerWidth <= 768) {
      numVisibleSlides = 1;
    } else {
      numVisibleSlides = 3;
    }

    const slideWidth = slider.clientWidth / numVisibleSlides;
    for (const slide of slides) {
      slide.style.width = `${slideWidth}px`;
    }
    currentIndex = Math.min(currentIndex, slides.length - numVisibleSlides);
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function showSlide(index) {
    const maxIndex = slides.length - numVisibleSlides;
    if (index < 0) {
      index = maxIndex;
    } else if (index > maxIndex) {
      index = 0;
    }
    slider.style.transform = `translateX(-${index * slider.clientWidth / numVisibleSlides}px)`;
    currentIndex = index;
  }

  prevBtn.addEventListener("click", function() {
    showSlide(currentIndex - 1);
  });

  nextBtn.addEventListener("click", function() {
    showSlide(currentIndex + 1);
  });

  window.addEventListener("resize", function() {
    updateSliderWidth();
  });

  updateSliderWidth();
});

});