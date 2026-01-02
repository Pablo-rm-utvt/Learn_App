import React from 'react'
import { View,Text } from 'react-native'

interface Props{
    name_user: string;
    lastname_user: string;
    age: string;
}

export const UserCard = ({ name_user, lastname_user, age}: Props) => {
  return (
    <View>
        <Text>{name_user}</Text>
        <Text>{lastname_user}</Text>
        <Text>{age}</Text>
    </View>
  )
}
