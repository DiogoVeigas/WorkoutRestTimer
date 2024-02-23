import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';

export default function Settings() {
  return (
    <SafeAreaView>
      <Text>Welcome to the settings screen</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}