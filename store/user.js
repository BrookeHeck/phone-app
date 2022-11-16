const initialState = {
  contacts: [],
  selectedContact: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'get_contacts':
      state = { ...state, contacts: action.payload }
      return state;
    case 'select_contact':
      state = { ...state, selectedContact: action.payload }
    default: return state;
  }
}

export default reducer;