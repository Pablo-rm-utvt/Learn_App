import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { PeopleCard } from '../components/PeopleCard'
import { usePeople } from '../hooks/usePeople'

export const PeopleScreen = () => {
  const { people } = usePeople()
  return (
    <ScrollView>

    <View>
      <Text>PeopleScreen</Text>
      {people.map( person => (
        <PeopleCard 
          key={person.id}
          id={person.id}
          name={person.name}
          email={person.email}
        />
      ))}
    </View>
    </ScrollView>
  );
}

