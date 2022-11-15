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
      console.log(action.payload);
      state = { ...state, gameTimer: action.payload }
      console.log(state);
    default: return state;
  }
}

export default reducer;