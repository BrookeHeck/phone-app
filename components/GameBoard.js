import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { When } from "react-if";
import { SafeAreaView } from "react-native";
import Player from "./Player";
import HomeScreen from "./HomeScreen";
import Target from "./Target";

const GameBoard = () => {
  const dispatch = useDispatch();
  const gameInProgress = useSelector(state => state.gameStatus.gameInProgress);
  const targetCoords = useSelector(state => state.coordinates.targets);

  const decrementGameTimer = () => {

  }

  const createTargets = () => {
    dispatch({type: 'create_targets'});
  }

  const startInterval = () => {
    const id = setInterval(() => {
      if(!gameInProgress) clearInterval(id);
      else {
        createTargets();
      }
    }, 4000)
  }

  useEffect(() => {
    startInterval();
  }, [gameInProgress]);

  return (
    <SafeAreaView>
      <When condition={!gameInProgress}>
        <HomeScreen />
      </When>

      <When condition={gameInProgress}>
        <Player />
        {
          targetCoords.map((target, idx) => (
            <Target coord={target} key={idx} />
          ))
        }
      </When>
    </SafeAreaView>
  )
}

export default GameBoard;