const initialState = {
  player: { x: 0, y: 0 },
  targets: [{x: 10, y: 400}, {x: 300, y: 10}, {x: 50, y: 50}, {x: 300, y: 400}, {x: 150, y: 200}],
  score: 0,
}

const checkCoordOutOfBounds = (coord) => {
  if (coord > 650) return 650;
  if (coord < 0) return 0;
  else return coord;
}

const setCoords = ({ x, y }) => {
  y = checkCoordOutOfBounds(Math.ceil(y * -750));
  x = checkCoordOutOfBounds(Math.ceil(x * 500));
  return { x, y };
}

const createOneTarget = () => {
  const x = Math.floor((Math.random() * 300) + 10);
  const y = Math.floor((Math.random() * 600) + 10);
  return {x, y};
}

const createTargets = () => {
  const targetArr = [];
  for(let i = 0; i < 5; i++) {
    targetArr.push(createOneTarget());
  }
  return targetArr;
}

const checkForTargets = (playerCoord, targetArr, score) => {
  let indexToRemove = -1;
  targetArr.forEach((target, idx) => {
    if(playerCoord.x < target.x + 20 && playerCoord.x > target.x - 20) {
      if(playerCoord.y < target.y + 20 && playerCoord.y > target.y - 20) {
        score++;
        indexToRemove = idx;
      }
    }
  });
  if(indexToRemove !== -1) {
    const newTargetArr = targetArr.filter((target, idx) => idx !== indexToRemove);
    return {score: score, targets: newTargetArr};
  } else return {score, targets: targetArr};
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'move_player':
      const newCoord = setCoords(action.payload);
      const updates = checkForTargets(state.player, state.targets, state.score);
      state = {player: newCoord, score: updates.score, targets: updates.targets};
      return state;
    case 'create_targets':
      const newTargets = createTargets();
      state = {...state, targets: newTargets};
      return state;
    case 'reset':
      state = initialState;
      return state;
    default: return state;
  }
}

export default reducer;



