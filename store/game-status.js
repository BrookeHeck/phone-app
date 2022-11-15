const initialState = {
  gameInProgress: false,
  gameTimer: 60,
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'start_game':
      state = { ...state, gameInProgress: true };
      return state;
    case 'decrement_timer':
      state = { ...state, gameTimer: action.payload }
    default: return state;
  }
}

export default reducer;