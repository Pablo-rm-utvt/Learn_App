import React from 'react'
import { Text, View } from 'react-native';

interface Me {
age:number;
firstname:string;
lastname:string;
address:Address;
}
                        //aqui nosotros definimos los propiedades con sus tipos de datos
interface Address{
    country:string;
    street:string;
}

export const ObjectLiterals = () => {

    const me:Me={
        age:19,
        firstname:"Pablo",
        lastname:"Ramírez",
        address:{
            country:"Mexico",
            street:"Poniente 4"
        }
    }

  return (
    <View>
        <Text>Objetos Literales</Text>
        <Text>{JSON.stringify(me,null,2)}</Text>
        {/* esto nos devuelve la informacion en formato JSON */}
    </View>
  );
}
