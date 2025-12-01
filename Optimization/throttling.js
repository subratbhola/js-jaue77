
function throttle(fn, delay) {
  let last = 0;
  return function(...args) {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn.apply(this, args);
    }
  };
}

const screendResize = throttle(function() {
  console.log('Resized at', new Date().toLocaleTimeString());
}, 300);

window.addEventListener("resize", screendResize);

