import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

interface Props {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
}

export const SwapiCard = ({ name, height, mass, hair_color, skin_color, eye_color }: Props) => {
  return (
    <TouchableOpacity>
      <View>
        <Text>Name: {name} </Text>
        <Text>Height: {height}</Text>
        <Text>Mass: {mass}</Text>
        <Text>Hair Color: {hair_color}</Text>
        <Text>Skin Color: {skin_color}</Text>
        <Text>Eye Color: {eye_color}</Text>
      </View>
    </TouchableOpacity>
  )
}
