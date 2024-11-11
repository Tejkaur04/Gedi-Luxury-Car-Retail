var image = document.getElementById('car');
var deg360 = document.getElementById('view360');
var close = document.getElementById('close360');
var selectedcolor = document.getElementById('selectedcolor');
var rim_img = document.getElementById('vehicle-rim');
var rim_info = document.getElementById('rim-detail');
var cart_image_color = document.getElementById('cart-image-color');
var cart_image_rim = document.getElementById('cart-image-rim');
var cart_color = document.getElementById('cart-color');
var cart_rim = document.getElementById('cart-rim');
var cart = document.getElementById('cart');

function darkblue(){
  image.src = '/bmwm4/bmw.jpg';
  selectedcolor.innerText = "TANZANITE BLUE";
  cart_image_color.src = '/bmwm4/darkblue.jpg';
  cart_color.innerText = "TANZANITE BLUE";

};
function grey(){
  image.src = 'bmwm4/greycar.jpg';
  selectedcolor.innerText = "BROOKYLN GREY";
  cart_image_color.src = '/bmwm4/grey.jpg';
  cart_color.innerText = "BROOKYLN GREY";
};
function green(){
  image.src = 'bmwm4/greenbmw.jpg';
  selectedcolor.innerText = "ISLE OF MAN GREEN";
  cart_image_color.src = '/bmwm4/green.jpg';
  cart_color.innerText = "ISLE OF MAN GREEN";
};
function orange(){
  image.src = 'bmwm4/orange.jpg';
  selectedcolor.innerText = "TORONTO RED";
  cart_image_color.src = '/bmwm4/red.jpg';
  cart_color.innerText = "ORONTO RED";
};
function black(){
  image.src = 'bmwm4/blackcar.jpg';
  selectedcolor.innerText = "SAPPHIRE BLACK";
  cart_image_color.src = '/bmwm4/black.jpg';
  cart_color.innerText = "SAPPHIRE BLACK";
};
function diffgrey(){
  image.src = 'bmwm4/diff-grey-car.jpg';
  selectedcolor.innerText = "SKYSCRAPPER GREY";
  cart_image_color.src = '/bmwm4/diff-grey.jpg';
  cart_color.innerText = "SKYSCRAPPER GREY";
};
function red(){
  selectedcolor.innerText = "AVENTURINE RED";
  image.src = 'bmwm4/redcar.jpg';
  cart_image_color.src = '/bmwm4/dark-red.jpeg';
  cart_color.innerText = "AVENTURINE RED";
};
function lightgrey(){
  image.src = 'bmwm4/lightgrey.jpg';
  selectedcolor.innerText = "DRAVIT GREY";
  cart_image_color.src = '/bmwm4/light-grey.jpeg';
  cart_color.innerText = "DRAVIT GREY";
};
function lightblue(){
  image.src = 'bmwm4/lightblue.jpg';
  selectedcolor.innerText = "PORTIMAO BLUE";
  cart_image_color.src = '/bmwm4/light-blue.jpeg';
  cart_color.innerText = "PORTIMAO BLUE";
};
function yellow(){
  image.src = 'bmwm4/yellowcar.jpg';
  selectedcolor.innerText = "SAO PAULO YELLOW";
  cart_image_color.src = '/bmwm4/yellow.jpeg';
  cart_color.innerText = "SAO PAULO YELLOW";
};
function show360(){
  deg360.style.display =  'block';
}
function close360(){
  deg360.style.display =  'none';
}
function rim1(){
  rim_img.src = 'bmwm4/wheels/1.png'
  rim_info.innerText = '19"/20" M forged wheels Double-spoke style 826 M Bicolour Black with mixed tyres';
  cart_image_rim.src = "./bmwm4/rims/1.jpeg";
  cart_rim.innerText = '19"/20" M forged wheels Double-spoke style 826 M Bicolour Black with mixed tyres';
}
function rim2(){
  rim_img.src = 'bmwm4/wheels/2.png'
  rim_info.innerText = '19"/20" M forged wheels Double spoke 825 M Silver with mixed tyres';
  cart_image_rim.src = "./bmwm4/rims/2.jpeg";
  cart_rim.innerText = '19"/20" M forged wheels Double spoke 825 M Silver with mixed tyres';
}
function rim3(){
  rim_img.src = 'bmwm4/wheels/3.png'
  rim_info.innerText = '19"/20" M forged wheels Double-spoke style 826 M Black with mixed tyres';
  cart_image_rim.src = "./bmwm4/rims/3.jpeg";
  cart_rim.innerText = '19"/20" M forged wheels Double-spoke style 826 M Black with mixed tyres';
}
function rim4(){
  rim_img.src = 'bmwm4/wheels/4.png'
  rim_info.innerText = '19"/20" M forged wheels Double-spoke style 825 M Bicolour Black with mixed tyres';
  cart_image_rim.src = "./bmwm4/rims/4.jpeg";
  cart_rim.innerText = '19"/20" M forged wheels Double-spoke style 825 M Bicolour Black with mixed tyres';
}

function show_cart(){
    cart.style.display = 'block';
}

function hide_cart(){
    cart.style.display = 'none';
}

function change_location(){
  window.open('T/emi_calculator.html');
}
