'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function writingAnimation(text, textContainer, delay) {
  var stop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var changeDelay = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  var textArray = text.split('');
  var i = 0;
  var write = true;
  var textAnimate = setInterval(function () {
    if (write) {
      if (i < textArray.length) {
        textContainer.innerHTML += textArray[i] === ' ' ? ' ' + textArray[i += 1] : textArray[i];
        i += 1;
      } else {
        write = !write;
        if (stop) {
          clearInterval(textAnimate);
        } else {
          setTimeout(function () {
            i = 0;
            textContainer.innerHTML = '';
            write = !write;
          }, changeDelay);
        }
      }
    }
  }, delay);
};

exports.default = writingAnimation;