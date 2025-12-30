import { View, Text } from 'react-native'
import React from 'react'
import { themes } from '../themes/themes'
// import { ButtonsKeyboard } from '../components/ButtonsKeyboard'
// import { TextCalculator } from '../components/Text'
import { useCalculator } from '../hooks/useCalculator'
import { NormalButton,AnotherButton, ButtonCero } from '../components/NormalButton'
import { ActionButton } from '../components/ActionButton'


export const CalculatorScreen = () => {
  
  const {   formula,
            previus,
            buildNumber, 
            clearBox, 
            changeding, 
            deletelast, 
            divideOperation, 
            multOperation, 
            SumaOperation, 
            restOperation,
            endEsult } = useCalculator();
  
  return (
    <View style={themes.screen}>
            <View style={themes.resultContainer}>
                <View>
                    <Text style={themes.operacion}>{formula}</Text>
                </View>   
                <View>
                    {formula===previus? (<Text style={themes.resultado}> </Text>):<Text style={themes.resultado}>{previus}</Text> }
                    
                </View>     
            </View>
           
            <View>
                <View style={themes.containerButtons}>
                    <View style={themes.containerNumbers}>
                        <AnotherButton
                            action={()=>clearBox()}
                            text='C'
                        />
                        <NormalButton
                            text='7'
                            action={()=>buildNumber("7")}
                        />
                        <NormalButton
                            text='4'
                            action={()=>buildNumber("4")}
                        />
                        <NormalButton
                            text='1'
                            action={()=>buildNumber("1")}
                        />
                        
                    </View>
                    <View style={themes.containerNumbersMid}>
                        <AnotherButton
                            text='+/-'
                            action={()=>changeding()}
                        />
                        <NormalButton
                            text='8'
                            action={()=>buildNumber("8")}
                        />
                        <NormalButton
                            text='5'
                            action={()=>buildNumber("5")}
                        />
                        <NormalButton
                            text='2'
                            action={()=>buildNumber("2")}
                        />
                        
                    </View>
        
                    <View style={themes.containerNumbersRight}>
                        <AnotherButton
                            text='DEL'
                            action={()=>deletelast()}
                        />
                        <NormalButton
                            text='9'
                            action={()=>buildNumber("9")}
                        />
                        <NormalButton
                            text='6'
                            action={()=>buildNumber("6")}
                        />
                        <NormalButton
                            text='3'
                            action={()=>buildNumber("3")}
                        />
                        <NormalButton
                            text='.'
                            action={()=>buildNumber(".")}
                        />
                        
                    </View>
                    <View style={themes.containerAction}>
                        <ActionButton
                            text='x'
                            action={()=>multOperation()}
                        />
                        <ActionButton
                            text='+'
                            action={()=>SumaOperation()}
                        />
                        <ActionButton
                            text='-'
                            action={()=>restOperation()}
                        />
                        <ActionButton
                            text='/'
                            action={()=>divideOperation()}
                        />
                        <ActionButton
                            text='='
                            action={()=>endEsult()}
                        />
                    </View>
                </View>
                <View style={themes.containerCero}>
                    <ButtonCero
                        text='0'
                        action={()=>buildNumber("0")}
                    />
                </View>
        
            </View>

    </View>
  )
}
