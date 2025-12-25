import React from 'react'
import { View,Text, ScrollView } from 'react-native'
import { useRickApiPaginated } from '../hooks/useRickApiPaginated'
import { CharacterCard } from '../components/CharacterCard'

export const ScreemRick = () => {
    const {Character} =useRickApiPaginated();

  return (
    <ScrollView>

    <View>
        <Text>Rick Api</Text>
        {Character.map(character =>(
            <CharacterCard
                key={character.id}
                id={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
            />
        ))}
    </View>
    </ScrollView>);
}
