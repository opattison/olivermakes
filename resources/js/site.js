var Velocity = require('../../node_modules/velocity-animate/velocity.min.js');

var Scrolling = (function () {
  var windowPathName = window.location.pathname;

/* select containers */
  var patternNav = document.querySelector('.pattern-nav');

/* select page markers */
  var Top = document.querySelector('#top');
  var backTop = document.querySelectorAll('.js-backTop');
  var Footnote = document.querySelectorAll('.footnote');
  var reverseFootnote = document.querySelectorAll('.reversefootnote');
  var patternNavLink = document.querySelectorAll('.pattern-nav-link');
  var patternNavLinkSub = document.querySelectorAll('.pattern-nav-link--sub');

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

  function scrollContainer (destination, container) {
    Velocity(
      destination,
      'scroll',
      {
        duration: 320,
        easing: 'easeInOutExpo',
        container: container,
        offset: -64
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

/* loop through each sidebar link and scroll if on the same page as hash */
  forEach(patternNavLinkSub, function (index, element) {
    var linkPathName = element.pathname;
    var linkHash = element.hash;

    if (windowPathName == linkPathName) {
      var destination = document.querySelector(linkHash);

      function scrollPatternNavLinkSub (event) {
        event.preventDefault();
        scroll(destination);
        window.location.hash = linkHash.substr(1);
      }

      element.addEventListener('click', scrollPatternNavLinkSub, false);
    };
  });

  var scrollPatternNav = (function () {
    forEach(patternNavLink, function (index, element) {
      var linkPathName = element.pathname;

      if (windowPathName == linkPathName) {
        scrollContainer(element, patternNav);
      };
    });
  })();

})();
