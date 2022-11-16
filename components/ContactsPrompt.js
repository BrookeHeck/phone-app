import * as Contacts from 'expo-contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Contact from '../utils/Contact';

const ContactsPrompt = () => {
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
            try {
              return new Contact(person.name, person.phoneNumbers[0].digits, person.id);
            } catch(e) {console.log(e)}
          });
          dispatch({ type: 'get_contacts', payload: contactArr });
        }
      } catch(e) {console.log(e)}
    })();
  }, []);
}

export default ContactsPrompt;