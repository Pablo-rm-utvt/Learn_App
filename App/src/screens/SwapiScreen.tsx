import React from 'react'
import { View,Text,ScrollView } from 'react-native'
import { useSwApiPaginated } from '../hooks/useSwApiPaginated'
import { SwapiCard } from '../components/SwapiCard'

export const SwapiScreen = () => {
    const {personaje}=useSwApiPaginated();
  return (
    <ScrollView>
      <View>
        <Text>this the Star Wars API </Text>
        {
            personaje.map(item =>(
                <SwapiCard
                    key={item.name}
                    name={item.name}
                    height={item.height}
                    mass={item.mass}
                    hair_color={item.hair_color}
                    skin_color={item.skin_color}
                    eye_color={item.eye_color}
                />
            ))
        }
      </View>
    </ScrollView>
  )
}
