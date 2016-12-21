import classie from 'desandro-classie';

function SlidingHeader(options) {
  this.init(options);
}

SlidingHeader.prototype.init = function(options) {
  // Define the settings as an object
  let settings = {
    'element': options.element,
    'class': 'to_scroll'
  };

  // If the target element has a specific class declared in the object passed,
  // replace the default class key in settings object
  if (options.class) {
    settings.class = options.class;
  } else {
    console.error('Please provide a class property.');
    return;
  }

  // Get the target element from the DOM
  let elementToSlide = document.querySelector(settings.element);

  // If there's a valid element, slide it. If not, just return false
  if (elementToSlide !== null) {
    let elementSettings = {
      'elementHeight': elementToSlide.clientHeight,
      'class': settings.class
    };

    this.slide(elementToSlide, elementSettings);
  } else {
    return false;
  }
};

SlidingHeader.prototype.slide = function(element, elementSettings) {

  let offset = 0,
    lastPosition = 0,
    targetClass = elementSettings.class,
    elementHeight = elementSettings.elementHeight;

  window.addEventListener('scroll', function(e) {

    let newPosition = this.scrollY,
      position = newPosition - lastPosition;

    // If we scrolled more than the element's height, then add the class to it.
    // Else, remove it, and the element will show up again
    if (offset + position > elementHeight) {
      offset = elementHeight;

      if (!classie.has( element, targetClass)) {
        classie.add( element, targetClass);
      }
    } else {
      offset = offset + position;

      if (classie.has( element, targetClass)) {
        classie.remove( element, targetClass);
      }
    }

    if (offset < 0) {
      offset = 0;
    }

    lastPosition = newPosition;
  });
};

export default SlidingHeader;
