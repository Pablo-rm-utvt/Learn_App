import { StyleSheet } from "react-native";

export const themes = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"black",   
    },
    containerButtons:{
        
        left:40,
        margin:20,
        width: 300,
        height:400,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:20,
        bottom:-45,
        paddingHorizontal:0
    },
    buttonAction:{
        // marginTop:20,
        // backgroundColor:"#f9b745ff",
        // padding:10,
        // borderRadius:40,
        // width:60,
        // height:60,
        // fontWeight:"light",
        // fontSize:30,
        // alignContent:"center",
        // alignItems:"center",
        // marginVertical:10,
        // position:"absolute",
        // textAlign:"center"
        fontSize:30,
        justifyContent:"center",
        alignSelf:"center",
        color:"black",
        textAlign:"center"
    },
    

    button:{
        backgroundColor:"#2a2b29ff",
        padding:10,
        color:"white",
        borderRadius:40,
        width:60,
        height:60,
        fontWeight:"light",
        fontSize:20,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        position:"static",
    },

    buttonNormal:{
        color:"white",
        textAlign:"center"
    },

    containerAction:{
        position:"absolute",
        left:180,
        bottom:0,
        marginBottom:45,
        margin:20,
        width: 80,
        height:380,
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"space-around",
        marginTop:20

    },

    containerNumbers:{
        position:"absolute",
        right:240,
        bottom:0,
        margin:20,
        marginBottom:125,
        width: 80,
        height:300,
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"space-around",
    },

    containerNumbersRight:{
        position:"absolute",
        marginBottom:45,
        right:78,
        bottom:0,
        margin:20,
        width: 80,
        height:380,
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"space-around",
        marginTop:20
    },
    containerNumbersMid:{
        position:"absolute",
        marginBottom:125,
        right:158,
        bottom:0,
        margin:20,
        width: 80,
        height:300,
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"space-around"
    },
    containerCero:{
        position:"absolute",
        right:170,
        bottom:0,
        margin:20,
        width: 160,
        height:80,
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"space-around",
       
        paddingHorizontal:10
    },

    resultContainer:{
        height:370,
        justifyContent:"flex-end",
        alignItems:"flex-end",
        paddingRight:20,
        paddingBottom:10
    },

    operacion:{
        textAlign:"right",
        color: "white",
        fontSize:50,
        fontWeight:"bold"
    },


    resultado:{
        textAlign:"right",
        color: "grey",
        fontSize:30,
        fontWeight:"bold"
    }
    

}) 