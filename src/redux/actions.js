export const eventCreate = newEvent => ({type: 'EVENT_CREATE', payload: newEvent})
export const userCreate = newUser => ({type: 'USER_CREATE', payload: newUser})
export const userAuth = logInUser => ({type: 'USER_AUTH', payload: logInUser})

export const loadOtherEvents = events => ({ type: 'LOAD_EVENTS', payload: events  })
export const updateEventsLoadFlag = flag => ({type: 'LOAD_EVENTS_FLAG', payload: flag })
