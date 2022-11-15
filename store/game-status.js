const initialState = {
  gameInProgress: false,
  gameTimer: 60,
  gameComplete: false,
}

const decrementTimer = (gameTimer) => {
  return gameTimer -= 4;
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'start_game':
      state = { ...state, gameInProgress: true, gameComplete: false };
      return state;
    case 'decrement_timer':
      const newTime = decrementTimer(state.gameTimer);
      state = { ...state, gameTimer: newTime }
      return state;
    case 'end_game':
      state = {gameTimer: 60, gameComplete: true, gameInProgress: false}
      return state;
    default: return state;
  }
}

export default reducer;