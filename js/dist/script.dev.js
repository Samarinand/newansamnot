"use strict";

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

new Swiper('.image-slider', {
  navigator: {
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
  mousewheel: {
    senitivity: 1,
    eventsTarget: ".image-slider"
  }
});
//# sourceMappingURL=script.dev.js.map
