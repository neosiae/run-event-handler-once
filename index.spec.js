const test = require('tape')
const sinon = require('sinon')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const runEventHandlerOnce = require('./index.js')

test('runs an event handler', t => {
  const dom = new JSDOM(`<!DOCTYPE html><button>Open</button>`)
  const window = dom.window
  const button = window.document.querySelector('button')
  const clickEvent = new window.MouseEvent('click')
  const eventHandler = sinon.fake()

  runEventHandlerOnce(button, 'click', eventHandler)
  button.dispatchEvent(clickEvent)
  t.ok(eventHandler.called)

  window.close()
  t.end()
})

test('runs an event handler only once', t => {
  const dom = new JSDOM(`<!DOCTYPE html><button>Open</button>`)
  const window = dom.window
  const button = window.document.querySelector('button')
  const clickEvent = new window.MouseEvent('click')
  const eventHandler = sinon.fake()

  runEventHandlerOnce(button, 'click', eventHandler)

  for (let i = 0; i < 5; i++) {
    button.dispatchEvent(clickEvent)
  }

  t.ok(eventHandler.calledOnce)

  window.close()
  t.end()
})
