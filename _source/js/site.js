var Velocity = require('../../node_modules/velocity-animate/velocity.min.js');

/* forEach loop through for querySelectorAll
we need to convert it to an array first */
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

function toggleActive(element) {
  var classList = element.classList;
  if (classList.contains('jsActive')) {
    classList.remove('jsActive');
  } else {
    classList.add('jsActive');
  }
}

function toggleHidden(element) {
  var classList = element.classList;
  if (classList.contains('jsHidden')) {
    classList.remove('jsHidden');
  } else {
    classList.add('jsHidden');
  }
}

/* slide items in/out with Velocity */
function animateHidden(element) {
  var classList = element.classList;
  if (classList.contains('jsHidden')) {
    Velocity(
      element,
      "slideDown",
      { duration: 240 },
      { easing: 'easeOutExpo' }
    );
    classList.remove('jsHidden');
  } else {
    Velocity(
      element,
      "slideUp",
      { duration: 160 },
      { easing: 'easeInExpo' }
    );
    classList.add('jsHidden');
  }
}

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

/* for showing and hiding sibling elements
(similar to details/summary progressive disclosure pattern but different markup) */
var Details = (function () {

  var title = document.querySelectorAll('.jsDisclose');
  var expanded = document.querySelectorAll('.jsExpanded');

  function rotateArrow(element) {
    var classList = element.classList;
    if (classList.contains('jsRotated')) {
      Velocity(
        element,
        { rotateZ: 0 },
        { duration: 160 },
        { easing: 'easeInExpo' }
      );
      classList.remove('jsRotated');
    } else {
      classList.add('jsRotated');
      Velocity(
        element,
        { rotateZ: -180 },
        { duration: 240 },
        { easing: 'easeInExpo' }
      );
    }
  }

  function showDetails() {
    toggleActive(this);

    var titleSibling = this.parentNode.querySelector('.jsExpanded');
    animateHidden(titleSibling);

    var buttonArrow = this.querySelector('.jsArrow');

    if (buttonArrow) {
      rotateArrow(buttonArrow);
    }
  }

  /* hide all expanded items by default */
  forEach(expanded, function (index, element) {
    element.classList.add('jsHidden');
  });

  /* assign click event handlers to all title button items */
  forEach(title, function (index, element) {
    element.addEventListener('click', showDetails, false);
  });
})();

var Patterns = (function () {

  var patternSidebar = document.querySelector('.pattern-sidebar');
  var patternMain = document.querySelector('.pattern-main');
  var patternEnd = document.querySelector('.end');
  var hideButton = document.querySelector('.jsHidePatterns');
  var showButton = document.querySelector('.jsShowPatterns');

  function toggleSidebar() {
    toggleHidden(patternSidebar);
    toggleHidden(showButton);
    toggleHidden(hideButton);

    toggleActive(patternMain);
    toggleActive(patternEnd);
  }

  if (patternSidebar) {

    // l01 media query (toggle-hide menu on smaller screens by default)
    if (window.matchMedia('(max-width: 60em)').matches) {
      toggleSidebar();
    }

    hideButton.addEventListener('click', toggleSidebar, false);
    showButton.addEventListener('click', toggleSidebar, false);
  }

})();
