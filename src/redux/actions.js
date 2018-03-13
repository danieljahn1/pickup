export const eventCreate = newEvent => ({type: 'EVENT_CREATE', payload: newEvent})
export const userCreate = newUser => ({type: 'USER_CREATE', payload: newUser})
export const userAuth = logInUser => ({type: 'USER_AUTH', payload: logInUser})