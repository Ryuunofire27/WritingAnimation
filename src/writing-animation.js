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

if(window && window.document){
  const writingDocuments = window.document.getElementsByClassName('writing-animation');
  
  if(writingDocuments.length > 0){
    for(let i = 0; i < writingDocuments.length; i++){
      const text = writingDocuments[i].getAttribute('data-anim-text') || '';
      const textContainer = writingDocuments[i];
      const delay = writingDocuments[i].getAttribute('data-anim-delay') || 1000;
      const stop = (writingDocuments[i].getAttribute('data-anim-stop') || 'true') == 'true';
      const changeDelay = writingDocuments[i].getAttribute('data-anim-change') || 0;
      writingAnimation(text, textContainer, parseInt(delay, 10), stop, parseInt(changeDelay, 10));
    }
  }
}

(() => {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = writingAnimation;
  }
}
)();
