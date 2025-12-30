
import { StyleSheet, Text, View } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { StatusBar } from 'expo-status-bar';



export const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        style="light"
      />
      <CalculatorScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff'
  },
});
