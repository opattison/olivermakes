var Scrolling = (function () {
/* select page markers */
  var Top = document.querySelector('#top');
  var backTop = document.querySelectorAll('.js-backTop');
  var Footnote = document.querySelectorAll('.footnote');
  var reverseFootnote = document.querySelectorAll('.reversefootnote');

/* forEach loop through for querySelectorAll – not an array */
  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };

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

/* loop through all backTops and add scroll action listeners */
  forEach(backTop, function (index, element) {

    function scrollTop (event) {
      event.preventDefault();
      scroll(Top);
    };

    element.addEventListener('click', scrollTop, false);
  });

/* loop through all footnotes and add scroll action listeners */
  forEach(Footnote, function (index, element) {
    var pattern = /:/i;
    var sanitizedHash = element.hash.replace(pattern, '\\:');
    var hash = document.querySelector(sanitizedHash);

    function scrollFootnote (event) {
      event.preventDefault();
      scroll(hash);
    };

    element.addEventListener('click', scrollFootnote, false);
  });

/* loop through all reverse footnotes and add scroll action listeners */
  forEach(reverseFootnote, function (index, element) {
    var pattern = /:/i;
    var sanitizedHash = element.hash.replace(pattern, '\\:');
    var hash = document.querySelector(sanitizedHash);

    function scrollReverseFootnote (event) {
      event.preventDefault();
      scroll(hash);
    };

    element.addEventListener('click', scrollReverseFootnote, false);
  });

})();
