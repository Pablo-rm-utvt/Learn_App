import React from 'react'
import { View, Text } from 'react-native'
import { Fab } from '../components/Fab'
import { useCounter } from '../hooks/useCounter'

export const MyFirstComponent = () => {
    const {count, incrementar, decrementar, reiniciar}= useCounter();

  return (
    <View style={{flex:1, justifyContent:"center", alignContent:"center",alignItems:"center"}}>

        <Text style={{fontSize:45}}>{count}</Text>

        <Fab
            text='+1'
            action={() => incrementar(1)}
            position='right'
        />
        <Fab
            text='-1'
            action={() => decrementar(1)}
            position='left'
        />
        <Fab
            text='reiniciar'
            action={() => reiniciar()}
            position='center'
        />
    </View>
    
  )
}
