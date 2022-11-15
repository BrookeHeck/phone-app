const initialState = {
  player: { x: 0, y: 0 },
  targets: [],
}

const checkCoordOutOfBounds = (coord) => {
  if (coord > 550) return 550;
  if (coord < 0) return 0;
  else return coord;
}

const setCoords = ({ x, y }) => {
  y = checkCoordOutOfBounds(Math.ceil(y * -650));
  x = checkCoordOutOfBounds(Math.ceil(x * 500));
  return { x, y };
}

const createTargets = () => {

}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'move_player':
      const newCoord = setCoords(action.payload);
      state = {...state, player: newCoord };
      return state;
    default: return state;
  }
}

export default reducer;



