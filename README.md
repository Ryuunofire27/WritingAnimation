# WritingAnimation

writing animation is a function that simulates writing as typing

## How to use

### Browser

```
<script src="https://cdn.jsdelivr.net/npm/writing-animation/dist/browser/writing-animation.min.js" ></script>
```

### Server
SS
Using with [browserify](https://github.com/browserify/browserify)

```
npm install --save writing-animation
```

#### ES5
```
var writing = require('writing-animation');
```

#### ES6
```
import writing from 'writing-animation';
```

#### Using

writing(text, textContainer, delay [,stop, changeDelay]);

#### Parameters

text : The text that you want to animate.

textContainer : The element of the DOM where you want to write the text.

delay : The time in milliseconds to write a letter of the text.

##### Optional

stop : A boolean value for stop the animation when the text was write.

changeDelay : The time in milliseconds between the writing animation.
