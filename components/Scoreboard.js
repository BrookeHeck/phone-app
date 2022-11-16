import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";
import SearchContacts from "./SearchContacts";

const Scoreboard = () => {
  const score = useSelector(state => state.coordinates.score);

  return (
    <>
      <View>
        <Text>You scored {score} points</Text>
        <Button
          title='Send Your Score'
        />
        <SearchContacts />
      </View>
    </>
  )
}

export default Scoreboard;