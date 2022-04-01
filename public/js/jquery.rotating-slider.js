

const mySlider = {
  config: {
    slider: '.slider-content',
    activeSlide: '.slide.active',
    button: '.next-button',
    transition: 800,
    delay() { return this.transition; },
    navigation: '.control-nav',
  },
  init(config) {
    this.createNav();
    $(mySlider.config.button).click(function () {
      mySlider.animateSlide($(this));
    });
  },
  getActiveSlide() {
    return $(mySlider.config.activeSlide);
  },
  getNextSlide() {
    let nextSlide = mySlider.getActiveSlide().next();
    if (nextSlide.length === 0) {
      nextSlide = $(mySlider.config.slider).find('.slide').eq(0);
    }
    return nextSlide;
  },
  createNav() {
    const totalSlides = $(mySlider.config.slider).find('.slide').length;
    const controlNav = $(mySlider.config.navigation).find('ul');
    let nav;
    for (let i = 0; i < totalSlides; i++) {
      let active = '';
      if (i === 0) {
        active = 'active';
      }
      controlNav.append(`<li class="slider-nav nav-${i} ${active} ">${i + 1}</li>`);
    }
  },
  animateNav() {
    const activeNav = $('li.active');
    let nextNav = activeNav.next();
    if (nextNav.length === 0) {
      nextNav = $('.control-nav li').eq(0);
    }
    activeNav.removeClass('active');
    nextNav.addClass('active');
  },
  animateSlide(button) {
    const activeSlide = mySlider.getActiveSlide();
    const nextSlide = mySlider.getNextSlide();
    const delay = mySlider.config.delay();
    const clipPath = $('.clip-svg');
    clipPath.css('transition-duration', `${mySlider.config.transition}ms`);
    button.css('pointer-events', 'none');
    nextSlide.css('z-index', 10);
    nextSlide.addClass('active').css('opacity', 1);
    setTimeout(() => {
      activeSlide.removeClass('active').css('opacity', 0);
    }, delay);
    setTimeout(() => {
      nextSlide.css('z-index', '');
      button.css('pointer-events', 'auto');
    }, delay + 300);
    mySlider.animateNav();
  },
};
$(document).ready(() => { mySlider.init(); });
