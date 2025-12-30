import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { themes } from '../themes/themes'
import * as Haptics from 'expo-haptics'

interface Props{
    text: string;
    action: () => void;
}

export const ActionButton = ({ text, action }: Props) => {
    
  return (
    <TouchableOpacity onPress={()=>{
        action();
        Haptics.selectionAsync();
    }}
        style={{...themes.button, backgroundColor:"#eb9d44f5"}}
    >

      <Text style={themes.buttonAction}>{text}</Text>

    </TouchableOpacity>
  )
}
