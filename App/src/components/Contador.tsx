import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import { useCounter } from '../hooks/useCounter'


export const Contador = () => {


    const {count, incrementar, decrementar, reiniciar}= useCounter();

  return (
    <View style={styles.container}>
        <Text>Mi contador: {count}</Text>
        <View 
        style={{alignContent:"space-between", flexDirection:"row"}}
        >
            <TouchableOpacity
            style={{backgroundColor:'green',borderRadius:10,width:40,margin:10, alignItems:"center"}}
            onPress={()=>incrementar(10)}
            >
                +1
            </TouchableOpacity>
            <TouchableOpacity
            style={{backgroundColor:'red',borderRadius:10,width:40,margin:10, alignItems:"center"}}
            onPress={()=>decrementar(2)}
            >
                -1
            </TouchableOpacity>

            <TouchableOpacity
            style={{backgroundColor:'orange',borderRadius:10,width:80,margin:10, alignItems:"center"}}
            onPress={()=>reiniciar()}
            >
                Reiniciar
            </TouchableOpacity>

        </View>
        

    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#e5a3e5ff",
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",

    }
});