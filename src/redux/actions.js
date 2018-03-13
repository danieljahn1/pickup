export const eventCreate = url => ({type: 'EVENT_CREATE', payload: url})
export const userCreate = newUser => ({type: 'USER_CREATE', payload: newUser})

export const loadOtherEvents = events => ({ type: 'LOAD_EVENTS', payload: events  })
export const updateEventsLoadFlag = flag => ({type: 'LOAD_EVENTS_FLAG', payload: flag })