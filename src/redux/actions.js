export const eventCreate = newEvent => ({type: 'EVENT_CREATE', payload: newEvent})
export const userCreate = newUser => ({type: 'USER_CREATE', payload: newUser})
export const userAuth = logInUser => ({type: 'USER_AUTH', payload: logInUser})
export const userLogOut = logOutUser => ({type: 'USER_LOG_OUT', payload: logOutUser})

export const loadOtherEvents = events => ({ type: 'LOAD_EVENTS', payload: events  })
export const updateEventsLoadFlag = flag => ({type: 'LOAD_EVENTS_FLAG', payload: flag })

export const joinEvent = participants => ({ type: 'ADD_ATTENDEE', payload: participants })