
var Top = document.querySelector('#top');
var backTop = document.querySelector('.return-action--top');

function scroll (destination) {
  Velocity(
    destination,
    'scroll',
    {
      duration: 200,
      easing: 'easeInOutExpo'
    }
  )
};

function scrollTop () {
  scroll(Top);
};

backTop.addEventListener('click', scrollTop, false);
