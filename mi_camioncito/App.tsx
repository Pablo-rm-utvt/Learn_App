import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LocationScreen } from './src/screen/LocationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LocationScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f4b5ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

