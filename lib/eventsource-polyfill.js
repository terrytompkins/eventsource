import EventSource from './eventsource'

if (typeof window === 'object' && !window.EventSource) {
  window.EventSource = EventSource
}

export default EventSource
