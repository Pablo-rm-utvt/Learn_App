import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    text: string;
    position?: 'left' | 'right' | 'center';
    action?: ()=> void;
}

export  const  Fab=({text, position, action}: Props) => {
  return (
    <TouchableOpacity
        onPress={action}
        style={[estilos.button, position==="right"? estilos.positioRight : position==="left"? estilos.positioLeft:estilos.positionCenter] }

    >
        <View style={estilos.containerText}>
            <Text style={estilos.texto}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

const estilos= StyleSheet.create({
    containerText:{
        width:50,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"white",
        borderWidth:1,
        borderRadius:7},
    texto:{
        color:"white",
        fontSize:10,
        textAlign:"center"
    },
    button:{
        backgroundColor: "#b058aaff",
        width:70,
        height:50,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        bottom:10
    },
    positioRight:{
        right:20,
    },
    positionCenter:{
        left:"40%",

    },
    positioLeft:{
        left:20,
    }
})


