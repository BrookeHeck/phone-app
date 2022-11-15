import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

const Scoreboard = () => {
  const dispatch = useDispatch();
  const score = useSelector(state => state.coordinates.score);

  const startNewGame = () => {
    dispatch({type: 'start_game'});
  }

  return (
    <View>
      <Text>You scored {score} points</Text>
      <Button 
        title='Send Your Score'
      />
    </View>
  )
}

export default Scoreboard;