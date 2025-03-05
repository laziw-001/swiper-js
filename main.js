let swiper = new Swiper('.mySwiper', {
  loop: true,
  navigation: {
    nextEl: '.b-left',
    prevEl: '.b-right',
  },
});

let data = [
  {
    price: 430,
    gradient: 'linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%',
  },
  {
    price: 550,
    gradient: 'linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%',
  },
  {
    price: 700,
    gradient: 'linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%)',
  },
  {
    price: 840,
    gradient: 'linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%)',
  },
];

let index = 0;

function bgGradient() {
  document.body.style.background = data[index].gradient;
  document.getElementById('price').textContent =
    '$' + data[index].price + '.00';

  index = (index + 1) % data.length;
}

bgGradient();

let left = document.querySelector('.b-left');
let right = document.querySelector('.b-right');

left.addEventListener('click', bgGradient);
right.addEventListener('click', bgGradient);
