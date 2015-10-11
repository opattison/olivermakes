/* select page markers */
var Top = document.querySelector('#top');
var backTop = document.querySelector('.return-action--top');

/* use Velocity UI function to scroll to any destination */
function scroll (destination) {
  Velocity(
    destination,
    'scroll',
    {
      duration: 320,
      easing: 'easeInOutExpo'
    }
  )
};

/* back-to-top function and click listener */
function scrollTop (event) {
  event.preventDefault();
  scroll(Top);
};

backTop.addEventListener('click', scrollTop, false);
