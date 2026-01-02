import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from 'expo-router'
import { RootStackParams } from '../navigation/navigation'


type NavigationProp =StackNavigationProp<RootStackParams,"SecondScreen">; 
//tipamos la navegacion para obtener las propiedades de StackNaviga6tionProp

export const SecondSCreen = () => {
  const navigation=useNavigation<NavigationProp>();
  // creamos una funcion que creará la navegacion usando las propiedades de NavigationProp
  return ( 
      <View style={{flex:1, backgroundColor:"#000000"}}>
        
        <TouchableOpacity
        onPress={()=>navigation.popToTop()}
        ><Text style={{color:"white"}}>SecondSCreen</Text></TouchableOpacity>
      </View>
  )
}