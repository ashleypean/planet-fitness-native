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
  settings: {
    'Notifications': true, 
    'Goals': true, 
    'Activity Alerts': true,
    'Workout Analysis': true,
    'Behavior Track': true, 
    'Sounds & Beeps': true,
  }
}

const reducer = (state = initialState, action) => {
  console.log('reducer:', action.type, action.payload)
  switch(action.type) {
    case 'ADD_USER': 
      const { firstName, lastName, email } = action.payload
      return {...state, user: { firstName, lastName, email }}
    case 'CHANGE_SETTINGS': 
      return {
        ...state,
        settings: {
          ...state.settings, 
          [action.payload]: !state.settings[action.payload],
        }
      }
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