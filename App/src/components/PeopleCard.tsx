import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
    id: number;
    name: string;
    email: string;
}

export const PeopleCard = ({id, name, email}: Props) => {
  
    return (
        <TouchableOpacity style={styles.card}>
            <View>
                <Text style={styles.id}>{id}</Text>
            </View>
            <View>
                <Text style={styles.NameEmail}>{name}</Text>
                <Text style={styles.NameEmail}>{email}</Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card:{
        alignSelf:"center",
        backgroundColor:"#b7f8eaff",
        margin:30, 
        borderRadius:10,
        borderColor:"#85ece5ff",
        borderWidth:10,
        width:300,
        padding:10
    },
    id:{
        alignSelf:"flex-end",
        textAlign:"center",
        fontSize:30,
        fontWeight:"bold",
        color:"blue"
    },
    NameEmail:{
        textAlign:"justify",
        fontSize:20,
        fontWeight:"normal",
        color:"black"
    }
    
});
