import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from 'expo-router'
import { RootStackParams } from '../navigation/navigation'
type NavigationProp =StackNavigationProp<RootStackParams,"FirstScreen">;

export const FirstScreen = () => {

    const navigation=useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate("SecondScreen")}>

    <View style={{flex:1, backgroundColor:"#000000"}}>
      <Text style={{color:"white"}}>FirstSCreen</Text>
    </View>
    </TouchableOpacity>
  )
}
