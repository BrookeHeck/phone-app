import { StyleSheet, Button, View } from 'react-native';
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