export const initialState = {
  user: null, 
  workouts: null,
}

const reducer = (state, action) => {
  switch(action.type) {

    case 'ADD_USER': 
      const { firstName, lastName, email } = action.payload
      return {...state, user: { firstName, lastName, email }}
    default: 
      return state
  }
}

export default reducer
