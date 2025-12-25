import { Text, View, StyleSheet } from "react-native";

export const FirstScreen = () => {

    const name              = "Pablitos";
    const age               = 18;
    const estatus:boolean   = false;
    const arrays:string[]   =[
        'Arriba',
        'el',
        'cruz azul'
    ]; 
    //arreglo de puras cadenas de texto

    
    return(
        <View>
            <Text>Nombre: {name} Edad: {age}</Text>
            <Text>{estatus ? 'Activo':'Apagado'}</Text> 
            {/* el '?' es un ternario, lo cual nos permite simplificar la sentencia del 'if else' */}

            <Text>{arrays.join(' ')}</Text> 
            {/* el join nos permite unir las cadenas de texto con alguna coma, espacio, etc*/}
        </View>
    );

}
