import React, { useReducer } from 'react';

export const StateContext = React.createContext(initialState)

export const initialState = {
  user: {
    firstName: 'Ashley', 
    lastName: 'Pean',
    email: 'test@test.com', 
    joinDate: {
      mm: 1, 
      dd: 23, 
      yyyy: 2020,
    }
  }, 
  workouts: null,
}

const reducer = (state = initialState, action) => {
  console.log('reducer: ', state)
  switch(action.type) {
    case 'ADD_USER': 
      const { firstName, lastName, email } = action.payload
      return {...state, user: { firstName, lastName, email }}
    default: 
      return state
  }
}

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider