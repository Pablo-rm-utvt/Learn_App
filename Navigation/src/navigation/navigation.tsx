import { createStackNavigator } from "@react-navigation/stack";
import { FirstScreen } from "../screens/FirstScreen";
import { SecondSCreen } from "../screens/SecondSCreen";

export type RootStackParams = {
   FirstScreen: undefined;
   SecondScreen: undefined;
};

export const Navigation = () => {

    const Stack = createStackNavigator<RootStackParams>();

    return (
        <Stack.Navigator
            initialRouteName="FirstScreen"
            screenOptions={{headerShown:false}}
        >
            <Stack.Screen name="FirstScreen" component={FirstScreen}></Stack.Screen>

            <Stack.Screen name="SecondScreen" component={SecondSCreen}></Stack.Screen>
        </Stack.Navigator>
    );
};