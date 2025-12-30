import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { themes } from '../themes/themes'
import * as Haptics from 'expo-haptics'

interface Props{
    text: string;
    action: () => void;
    value?: number|string;
}


export const NormalButton = ({ text, action}: Props) => {


  return (
    <TouchableOpacity 
        onPress={()=>{

            Haptics.selectionAsync();
            action();
        }}
        style={themes.button}
    
    >
      <Text style={themes.buttonNormal}>{text}</Text>
    </TouchableOpacity>
  )
}


export const ButtonCero = ({ text, action}: Props) => {
  return (
    <TouchableOpacity 
        onPress={()=>{
            action();
            Haptics.selectionAsync();
        }}
        style={{...themes.button, width:150, marginLeft:30}}
    >
      <Text style={themes.buttonNormal}>{text}</Text>
    </TouchableOpacity>
  )
}


export const AnotherButton = ({ text, action}: Props) => {
  return (
    <TouchableOpacity 
        onPress={()=>{
            action();
            Haptics.selectionAsync();
        }}
        style={{...themes.button, backgroundColor:"#808080ff"}}
    >
      <Text style={themes.buttonNormal}>{text}</Text>
    </TouchableOpacity>
  )
}