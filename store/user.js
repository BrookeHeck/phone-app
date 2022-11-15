const initialState = {
  contacts: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'get_contacts': 
      state = { contacts: action.payload }
      return state;
    default: return state;
  }
}

export default reducer;