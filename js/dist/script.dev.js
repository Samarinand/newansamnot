"use strict";

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var hamb = document.querySelector("#hamb");
var popup = document.querySelector("#popup");
var menu = document.querySelector("#menu").cloneNode(1);
var body = document.body;
hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
} // Код для закрытия меню при нажатии на ссылку


var links = Array.from(menu.children);
links.forEach(function (link) {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

new Swiper('.image-slider1', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    renderBullet: function renderBullet(index, className) {
      return '<span span class="' + className + '">' + (index + 1) + '</span>';
    }
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  grabCursor: true,
  slideToClickedSlide: true,
  hashNavigation: {
    watchStare: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  speed: 1000,
  effect: 'cube',
  cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 2,
    shadowScale: 0.94
  },
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: true,
    loadPrevNext: true
  }
});
new Swiper('.parallax-slider', (_ref = {
  parallax: true,
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  }
}, _defineProperty(_ref, "speed", 6000), _defineProperty(_ref, "lazy", {
  loadOnTransitionStart: true,
  loadPrevNext: true
}), _ref));
//# sourceMappingURL=script.dev.js.map
