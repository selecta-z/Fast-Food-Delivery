
// ------------------------------counter------------------------------

const count_0 = document.querySelector('.middle1_counter_number');
const btn_minus = document.querySelector('.middle1_counter_minus');
// const btn_minus_hover = document.querySelector('.middle1_counter_minus');
const btn_plus = document.querySelector('.middle1_counter_plus');

let count = 0;

btn_minus.onclick = function(){
    if (count>0){
        count --;
        count_0.innerHTML = count;
    }   else{
        count_0.disabled = true;
        // btn_minus_hover.classList.toggle('minus_disabled');
    }
}

btn_plus.onclick = function(){
    count ++;
    count_0.innerHTML = count;
}


// ------------------------------fa-cart-shopping/fa-heart------------------------------

const cart_shopping = document.querySelector('.middle_shop .fa-cart-shopping');
const heart = document.querySelector('.middle_like .fa-heart');

cart_shopping.addEventListener('click', ()=> {
    count_0.innerHTML = 0;
    count = 0;
});

heart.addEventListener('click', ()=> {
    count_0.innerHTML = 0;
    count = 0;
});

// ------------------------------stickyHeader------------------------------

window.onscroll = () => {
    const scrollPos = 100;
    const navigation = document.querySelector('.navigation');
    const menu__nav1_a = document.querySelector('.menu__nav1 a');
    const menu__nav2_a = document.querySelector('.menu__nav2 a');
    const menu__nav3_a = document.querySelector('.menu__nav3 a');
    const menu__nav4_a = document.querySelector('.menu__nav4 a');

    const menu__logo_img = document.querySelector('.menu__logo img');
    const menu__logo_text = document.querySelector('.menu__logo p');

    const menu__burger_lines = document.querySelector('.menu__burger-lines');
    const menu__burger_lines_before = document.querySelector('.menu__burger-lines::before');
    const menu__burger_lines_after = document.querySelector('.menu__burger-lines::after');

    
    if(document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos){
        navigation.classList.add('active');
        menu__nav1_a.classList.add('active');
        menu__nav2_a.classList.add('active');
        menu__nav3_a.classList.add('active');
        menu__nav4_a.classList.add('active');

        menu__logo_text.classList.add('active');

        menu__burger_lines.classList.add('active_white_lines', 'active_2px');
        menu__burger_lines_before.classList.add('active_white_lines', 'active_2px');
        menu__burger_lines_after.classList.add('active_white_lines', 'active_2px')

    } else{
        navigation.classList.remove('active');
        menu__nav1_a.classList.remove('active');
        menu__nav2_a.classList.remove('active');
        menu__nav3_a.classList.remove('active');
        menu__nav4_a.classList.remove('active');

        menu__logo_text.classList.remove('active');

        menu__burger_lines.classList.remove('active_white_lines', 'active_2px');
        menu__burger_lines_before.classList.remove('active_white_lines', 'active_2px');
        menu__burger_lines_after.classList.remove('active_white_lines', 'active_2px');
    }
}

// ------------------------------menu__burger------------------------------

const menuBurger = document.querySelector('.menu__burger');
const burgerLines = document.querySelector('.menu__burger .menu__burger-lines');
const menuHome = document.querySelector('.menu__home');

const menu__nav_home = document.querySelector('.menu__nav1');
const menu__nav_shop = document.querySelector('.menu__nav2');
const menu__nav_menu = document.querySelector('.menu__nav3');
const menu__nav_contact = document.querySelector('.menu__nav4');


menuBurger.addEventListener('click', ()=> {
  menuHome.classList.toggle('active');
  menuBurger.classList.toggle('active');
  burgerLines.classList.toggle('active');
});


menu__nav_home.addEventListener('click', ()=> {
  menuHome.classList.remove('active');
  burgerLines.classList.remove('active');
});

menu__nav_shop.addEventListener('click', ()=> {
  menuHome.classList.remove('active');
  burgerLines.classList.remove('active');
});

menu__nav_menu.addEventListener('click', ()=> {
  menuHome.classList.remove('active');
  burgerLines.classList.remove('active');
});

menu__nav_contact.addEventListener('click', ()=> {
  menuHome.classList.remove('active');
  burgerLines.classList.remove('active');
});

// ------------------------------swiper------------------------------

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

// ------------------------------map------------------------------

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.42812248918536, lng: 30.49688266245988 },
    zoom: 10,
  });
}

window.initMap = initMap;

// ------------------------------active_img------------------------------

document.querySelectorAll('.middle1_images_img').forEach((item) =>
    item.addEventListener('click', function(event){
        event.preventDefault();

        document.querySelectorAll('.middle1_images_img').forEach(
            (child) => child.classList.remove('default_active_img')
        );

        document.querySelectorAll('.middle1_aboutFood_none').forEach(
            (child) => child.classList.remove('default_active_text')
        )   
        
        item.classList.add('default_active_img');

        document.querySelector(".middle1_aboutFood_none1").classList.add('default_active_text');
    })
);

document.querySelector('middle1_images_img').click();
