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
      // renderBullet: function (index,className){
      //   return '<span span class="' + className + '">' + (index + 1) + '</span>';
      // },
      
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
/* breakpoints:{
  320:{
    slidesPerView: 1,
  },
  480:{
    slidesPerView: 2,
  },
  992:{
    slidesPerView: 3,
  },
} */

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
};

document.querySelector('#elastic').oninput = function(){
  let val = this.value.trim();
  let elasticItems = document.querySelectorAll('.elastic');
  if (val != ''){
    elasticItems.forEach(function(elem){
      if (elem.innerText.search(val) == -1){
        elem.classList.add('hide');
        elem.innerHTML = elem.innerText;
      }
      else {
        elem.classList.remove('hide');
        let str = elem.innerText;
        elem.innerHTML = insertMark(str,elem.innerText.search(val),val.length);
        
      }
    });
  }
  else {
    elasticItems.forEach(function(elem){
    elem.classList.remove('hide'); 
    elem.innerHTML = elem.innerText;
   
   });
  }
}
function insertMark(string,pos,len){
  return string.slice(0,pos) + '<mark>' + string.slice(pos,pos+len) + '</mark>'+ string.slice(pos+len);
};

// считываем кнопку
const goTopBtn = document.querySelector(".go-top");
const goTopBtn1 = document.querySelector(".triangle-up");
// обработчик на скролл окна
window.addEventListener("scroll", trackScroll);
// обработчик на нажатии
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  // вычисляем положение от верхушки страницы
  const scrolled = window.pageYOffset;
  // считаем высоту окна браузера
  const coords = document.documentElement.clientHeight;
  // если вышли за пределы первого окна
  if (scrolled > coords) {
    // кнопка появляется
    goTopBtn.classList.add("go-top--show");
    goTopBtn1.classList.add("triangle-up--show");
  } else {
    // иначе исчезает
    goTopBtn.classList.remove("go-top--show");
    goTopBtn1.classList.remove("triangle-up--show");
  }
}

function goTop() {
  // пока не вернулись в начало страницы
  if (window.pageYOffset > 0) {
    // скроллим наверх
    window.scrollBy(0, -25); // второй аргумент - скорость
    setTimeout(goTop, 0); // входим в рекурсию
  }
}

let tab = function () {
  let tabNav = document.querySelectorAll('.tabs-nav__item'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;

  tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
  });

  function selectTabNav() {
      tabNav.forEach(item => {
          item.classList.remove('is-active');
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
      tabContent.forEach(item => {
          item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      })
  }

};


tab();





/* "use strict"
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e){
    e.preventDefault();

    let error = formValidate(form);
  }

function formValidate(form){
  let error = 0;
  let formReq = document.querySelectorAll('_req');

  for (let index = 0; index< formReq.length; index++){
    const input = formReq [index];
    formRemoveError(input);

    if (input.classList.contains('_email')){
      if (emailTest(input)){
        formAddError(input);
        error++
      }
    }
  }
 function formAddError(input){
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
 }
 function formAddError(input){
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
 }
 function emailTest(input){
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
 }
}




     if (error === 0){
      postMessage.classList.add('_sending');
      let response = awaite fetch('sendmaile.php',{
        method: 'POST',
        body: formData
      });
      if (response.ok){
        let result = await response.json();
        alert (result.message);
        formPreview.innerHTML = '';
        form.reset();
        form.classList.remove('_sending');
      }else{
        alert('Ошибка')
        form.classList.remove('_sending');
      }
     }else{
      alert ('Заполните обязательные поля');
     }

});
  */