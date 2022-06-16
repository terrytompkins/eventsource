const EventSourcePolyfill = require('./eventsource')

if (typeof window === 'object' && !window.EventSource) {
  window.EventSource = EventSourcePolyfill
}

module.exports = EventSourcePolyfill
