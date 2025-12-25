import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import { useAuthContext } from '../context/AuthContext'


export const LoginScreen = () => {
    
    const { isAuthenticated, login, user, logout}=useAuthContext();

  return (
    <View>
        <Text>Login</Text>
        {isAuthenticated? (
            <View>
                <Text>Bienvenido</Text>
                <Text>Nombre: {user?.name}</Text>
                <Text>Correo: {user?.email}</Text>
                <TouchableOpacity
                onPress={()=>logout()}
                style={stilos.salir}
                ><Text>Salir</Text></TouchableOpacity>
            </View>
        ):(
            <View>
                <Text>Ingresar a la aplicación</Text>
                <TouchableOpacity
                style={stilos.ingresar}
                onPress={()=> login("pablo@gmail.com", "1234")}
                ><Text>Entrar</Text></TouchableOpacity>
            </View>
        )
        }
    </View>
  )
}

const stilos=StyleSheet.create({

    ingresar:{

        alignSelf:"center",
        backgroundColor:"#99fc90ff",
        margin:10, 
        borderRadius:10,
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
        width:50


    },

    salir:{
        width:50,
        alignSelf:"center",
        backgroundColor:"#f5a076ff",
        margin:10, 
        borderRadius:10,
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center"


    }

});