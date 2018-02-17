const writingAnimation = (text, textContainer, delay, stop = true, changeDelay = 0) => {
  const textArray = text.split('');
  let i = 0;
  let write = true;
  const textAnimate = setInterval(() => {
    if (write) {
      if (i < textArray.length) {
        textContainer.innerHTML += textArray[i] === ' ' ? ` ${textArray[i += 1]}` : textArray[i];
        i += 1;
      } else {
        write = !write;
        if (stop) {
          clearInterval(textAnimate);
        } else {
          setTimeout(() => {
            i = 0;
            textContainer.innerHTML = '';
            write = !write;
          }, changeDelay);
        }
      }
    }
  }, delay);
};

export default writingAnimation;
