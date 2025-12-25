import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'

interface Props {
    id: number;
    name: string;
    status: string;
    species: string
}

export const CharacterCard = ({ id, name, status, species }: Props) => {
  return (
    <TouchableOpacity>
        <View>
            <Text>ID: {id}</Text>
            <Text>Name: {name}</Text>
            <Text>Status: {status}</Text>
            <Text>Species: {species}</Text>
        </View>
    </TouchableOpacity>
  );
}
