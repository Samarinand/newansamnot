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

new Swiper('.image-slider1',{
  navigation:{
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
    
    keyboard:{
      enabled:true,
      onlyInViewport:true,
      pageUpDown:true
    },
 spaceBetween:30,
 loop:true,
 autoplay:{
  delay:1000,
  disableOnInteraction:false
 },
 speed:1000,
 effect:'cube',
 cubeEffect:{
  slideShadows:true,
  shadow:true,
  shadowOffset:2,
  shadowScale:0.94
 },
 preloadImages:false,
 lazy:{
loadOnTransitionStart:true,
loadPrevNext:true
},


});
new Swiper('.parallax-slider',{
  parallax:true,
  speed:1000,
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl:'.swiper-button-prev'
  },
  autoplay:{
    delay:1000,
    disableOnInteraction:false
   },
   speed:6000,
   lazy:{
    loadOnTransitionStart:true,
    loadPrevNext:true
    },

});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}