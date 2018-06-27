module.exports = runEventHandlerOnce;

function runEventHandlerOnce(target, type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The callback provided is not a function.');
  }

  const options = arguments[3] || {};
  const addOptions = options.add || {};
  const removeOptions = options.remove || {};

  function handleEvent(event) {
    event.target.removeEventListener(event.type, handleEvent, removeOptions);
    listener.apply(this, arguments);
  }

  target.addEventListener(type, handleEvent, addOptions);
}
