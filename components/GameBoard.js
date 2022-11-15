import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { When } from "react-if";
import { SafeAreaView, View, Text } from "react-native";
import Player from "./Player";
import HomeScreen from "./HomeScreen";
import Target from "./Target";
import Scoreboard from "./Scoreboard";

const GameBoard = () => {
  const dispatch = useDispatch();

  const gameInProgress = useSelector(state => state.gameStatus.gameInProgress);
  const targetCoords = useSelector(state => state.coordinates.targets);
  const score = useSelector(state => state.coordinates.score);
  const gameTimer = useSelector(state => state.gameStatus.gameTimer);
  const gameComplete = useSelector(state => state.gameStatus.gameComplete);

  const [ id, setId ] = useState(null);

  const decrementGameTimer = () => {
    dispatch({type: 'decrement_timer'});
  }

  const moveTargets = () => {
    dispatch({type: 'create_targets'});
  }

  const startInterval = () => {
    let timer = 60;
    const id = setInterval(() => {
      if(timer <= 0) {
        clearInterval(id);
        dispatch({type: 'end_game'});
      }
      else {
        timer -= 4;
        setId(null);
        decrementGameTimer();
        moveTargets();
      }
    }, 4000)
    setId(id);
  }

  useEffect(() => {
    if(!id && gameInProgress) startInterval();
  }, [gameInProgress]);

  return (
    <SafeAreaView>
      <When condition={!gameInProgress}>
        <HomeScreen />
      </When>

      <When condition={gameInProgress}>
        <View><Text>{score}</Text></View>
        <View><Text>{gameTimer}</Text></View>
        <Player />
        {
          targetCoords.map((target, idx) => (
            <Target coord={target} key={idx} />
          ))
        }
      </When>

      <When condition={gameComplete} >
        <Scoreboard />
      </When>
    </SafeAreaView>
  )
}

export default GameBoard;