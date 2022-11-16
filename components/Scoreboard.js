import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";
import SearchContacts from "./SearchContacts";
import * as SMS from 'expo-sms';

const Scoreboard = () => {
  const score = useSelector(state => state.coordinates.score);

  const selectedContact = useSelector(state => state.user.selectedContact);

  const sendScore = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      if(selectedContact) {
        const { result } = await SMS.sendSMSAsync(
          [selectedContact.phoneNumber], `I scored ${score} points on this cool phone app`);
        console.log(result);
      }
    } else {
      console.log('not sent');
    }
  }

  return (
    <>
      <View>
        <Text>You scored {score} points</Text>
        <Button
          title={`Send Your Score to ${selectedContact ? selectedContact.name : ''}`}
          onPress={sendScore}
        />
        <SearchContacts />
      </View>
    </>
  )
}

export default Scoreboard;