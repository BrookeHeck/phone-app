import { StyleSheet, Button, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const startGame = () => {
    dispatch({type: 'reset'});
    dispatch({ type: 'start_game' });
  }

  return (
    <View>
      <Button
        onPress={startGame}
        title='Start Game'
        styles={styles.buttonStyles}
      />
      <Text>
        Move your phone to move the player. Try to hit all the targets to score points.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyles: {
    height: 300,
    width: 300,
    backgroundColor: 'blue',
    color: 'white',
    margin: 25
  }
})

export default HomeScreen;