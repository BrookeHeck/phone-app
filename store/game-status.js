const initialState = {
  gameInProgress: false,
  gameTimer: 60,
  score: 0,
}


const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'start_game':
      state = {...state, gameInProgress: true};
      return state;
    default: return state;
  }
}

export default reducer;