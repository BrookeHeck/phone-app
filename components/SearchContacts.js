import { View, Text, TextInput, ScrollView, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchContacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.user.contacts);

  const [contactList, setContactList] = useState(contacts);

  const changeList = (searchStr) => {
    const filteredList = contacts.filter(contact => {
      try {
        return contact.name.includes(searchStr);
      } catch (e) { console.log(e) }
    });
    setContactList(filteredList);
  }

  const changeSelectedContact = (contact) => {
    console.log(contact);
    dispatch({ type: 'select_contact', payload: contact });
  }

  return (
    <View>
      <Text>Search Contacts List</Text>
      <TextInput
        placeholder='search contacts'
        onChangeText={changeList}
      />

      <ScrollView>
        {
          contactList.map(contact => {
            try {
              return (
                <Button
                  title={contact.name}
                  onPress={() => changeSelectedContact(contact)}
                  key={contact.id}
                />
              )
            } catch (e) { console.log(e) }
          })
        }
      </ScrollView>
    </View>
  )
}

export default SearchContacts;