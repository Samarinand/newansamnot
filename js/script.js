const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

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
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
new Swiper('.image-slider',{
  navigator:{
    nextEl: '.swiper-button-next',
    prevEl:'.swiper-button-prev'
    },
    pagination:{
      el:'.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index,className){
        return '<span span class="' + className + '">' + (index + 1) + '</span>';
      },
      
    },
    scrollbar:{
      el:'.swiper-scrollbar',
      draggable: true
      
    },
    grabCursor: true,
    slideToClickedSlide: true,
    hashNavigation:{
      watchStare: true,
    },
    keyboard:{
      enabled:true,
      onlyInViewport:true,
      pageUpDown:true,
    },
    mousewheel:{
      senitivity:1,
      eventsTarget:".image-slider",
    },
});
