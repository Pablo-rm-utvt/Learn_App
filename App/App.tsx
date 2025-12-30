
import {Text, View } from 'react-native';
// import { FirstScreen } from './src/screens/FirstScreen';
// import { ObjectLiterals } from './src/screens/ObjectLiterals';
// import { Contador } from './src/components/Contador';
// import { LoginScreen } from './src/screens/LoginScreen';
// import { AuthProvider } from './src/context/AuthContext';
// import { PeopleScreen } from './src/screens/PeopleScreen';
// import { ScreemRick } from './src/screens/ScreemRick';
// import { SwapiScreen } from './src/screens/SwapiScreen';
import { MyFirstComponent } from './src/screens/MyFirstComponent';
const App= () => {
  return (
    // <AuthProvider>
    //   <View style={{flex:1, justifyContent:"center", alignContent:"center",alignItems:"center"}}>
    //     {/* <FirstScreen></FirstScreen> */}
    //     {/* <ObjectLiterals></ObjectLiterals> */}
    //     {/* <Contador></Contador> */}
    //   <LoginScreen></LoginScreen>
    //   </View>
    // </AuthProvider>
    <View style={{flex:1}}>
    {/* <PeopleScreen/> */}
      {/* <ScreemRick></ScreemRick> */}
      {/* <SwapiScreen/> */}
      <MyFirstComponent/>
    </View>
    
  );
};


export default App;
