import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";
import ContactsPrompt from "./ContactsPrompt";

const Scoreboard = () => {
  const score = useSelector(state => state.coordinates.score);

  return (
    <>
      <View>
        <Text>You scored {score} points</Text>
        <Button
          title='Send Your Score'
        />
      </View>
      <ContactsPrompt />
    </>
  )
}

export default Scoreboard;