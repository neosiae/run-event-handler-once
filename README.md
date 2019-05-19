# run-event-handler-once

![npm](https://img.shields.io/npm/v/run-event-handler-once.svg?style=flat-square) ![Travis (.com) branch](https://img.shields.io/travis/com/neosiae/run-event-handler-once/master.svg?style=flat-square) ![npm](https://img.shields.io/npm/dw/run-event-handler-once.svg?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/run-event-handler-once.svg?style=flat-square) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Register an event handler to a desired target and ensure that the event handler is executed only once.

## Installation

Install `run-event-handler-once` using npm:

> npm install --save run-event-handler-once

Or via yarn:

> yarn add run-event-handler-once

## Usage

```javascript
const runEventHandlerOnce = require('run-event-handler-once')

const button = document.querySelector('button')

runEventHandlerOnce(button, 'click', function() {
  console.log('Hello!')
})
```

## API

### runEventHandlerOnce(target, type, listener, [options])

#### target

Type: `EventTarget`

Register an event handler to a desired target.

#### type

Type: `string`

The event type.

#### listener

Type: `function`

An event handler which receives a notification when an event of the specified type occurs.

#### options (Optional)

Type: `object`

An options object that specifies characteristics about the event listener. The available options are:

- **`add`** - An options object that will be passed to `addEventListener`
- **`remove`** - An options object that will be passed to `removeEventListener`

## License

MIT
