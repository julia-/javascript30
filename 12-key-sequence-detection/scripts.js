const pressedKeys = [];
const secretCode = 'willow'

window.addEventListener('keyup', (e) => {
  pressedKeys.push(e.key);
  pressedKeys.splice(-secretCode.length - 1, pressedKeys.length - secretCode.length);
  console.log(pressedKeys);

  if (pressedKeys.join('').inlcudes(secretCode)) {
    console.log('You\'ve entered the secret code!');
    cornify_add();
  }
})