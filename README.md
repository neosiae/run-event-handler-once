# run-event-handler-once

[![Build Status](https://travis-ci.com/neosiae/run-event-handler-once.svg?branch=master)](https://travis-ci.com/neosiae/run-event-handler-once)

Attach an event handler to the specified element and ensure that the event handler is executed only once.

## Installation

Install `run-event-handler-once` using npm:

> npm install --save run-event-handler-once

Or via yarn:

> yarn add run-event-handler-once

## Usage

```javascript
const runEventHandlerOnce = require('run-event-handler-once');

const button = document.querySelector('button');

runEventHandlerOnce(button, 'click', function() {
  console.log('Hello!');
});
```

## API

### runEventHandlerOnce(target, type, listener, [options])

#### target

Type: `EventTarget`

The event target to listen for the event on.

#### type 

Type: `string`

The event type to listen for

#### listener

Type: `function`

An event handler that is called when a specific event type occurs.

#### options (Optional)

Type: `object`

An options object. It has two keys: __`add`__ an options object that will be passed to `addEventListener` and __`remove`__ an options object that will be passed to `removeEventListener`.

## License

MIT







