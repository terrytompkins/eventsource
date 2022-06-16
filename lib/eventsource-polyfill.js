import EventSource from './eventsource'

if (typeof window === 'object' && !window.EventSource) {
  window.EventSource = EventSource
}
window.EventSourcePolyfill = EventSource

export default EventSource
