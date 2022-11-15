import * as Contacts from 'expo-contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Contact from '../utils/Contact';

const SendScore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.PhoneNumbers],
          });
          const contactArr = data.map(person => {
            if(person.phoneNumbers[0]) {
              return new Contact(person.name, person.phoneNumbers[0].digits, person.id) 
            }
          });
          console.log(contactArr);
          dispatch({ type: 'get_contacts', payload: contactArr });
          console.log(contactArr);
        }
      } catch(e) {console.log(e)}
    })();
  }, []);
}

export default SendScore;