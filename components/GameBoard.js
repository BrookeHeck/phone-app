import { useSelector } from "react-redux";
import { When } from "react-if";
import { SafeAreaView } from "react-native";
import Player from "./Player";
import HomeScreen from "./HomeScreen";

const GameBoard = () => {
  const gameInProgress = useSelector(state => state.gameStatus.gameInProgress);

  return (
    <SafeAreaView>
      <When condition={!gameInProgress}>
        <HomeScreen />
      </When>

      <When condition={gameInProgress}>
        <Player />
      </When>
    </SafeAreaView>
  )
}

export default GameBoard;