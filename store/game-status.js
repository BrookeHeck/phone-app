const initialState = {
  gameInProgress: false,
  gameTimer: 60,
}

const decrementTimer = (gameTimer) => {
  return gameTimer -= 4;
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'start_game':
      state = { ...state, gameInProgress: true };
      return state;
    case 'decrement_timer':
      const newTime = decrementTimer(state.gameTimer);
      state = { ...state, gameTimer: newTime }
      console.log(state);
    default: return state;
  }
}

export default reducer;