export const eventCreate = newEvent => ({type: 'EVENT_CREATE', payload: newEvent})
export const organizerCreate = newOrganizer => ({type: 'ORGANIZER_CREATE', payload: newOrganizer})
export const userCreate = newUser => ({type: 'USER_CREATE', payload: newUser})
export const userAuth = logInUser => ({type: 'USER_AUTH', payload: logInUser})
export const userLogOut = logOutUser => ({type: 'USER_LOG_OUT', payload: logOutUser})
export const userLogIn = logInUser => ({type: 'USER_LOG_IN' , payload: logInUser})

export const loadOtherEvents = events => ({ type: 'LOAD_EVENTS', payload: events  })
export const loadOtherUsers = users => ({ type: 'LOAD_OTHER_USERS', payload: users })
export const loadOtherParticipants = participants => ({ type: 'LOAD_OTHER_PARTICIPANTS', payload: participants })
export const updateEventsLoadFlag = flag => ({type: 'LOAD_EVENTS_FLAG', payload: flag })

export const joinEvent = participants => ({ type: 'ADD_ATTENDEE', payload: participants })

export const joinEventAnon = eventId => ({ type: 'JOIN_EVENT_ANON', payload: eventId })