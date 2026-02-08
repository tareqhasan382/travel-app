import { Stack } from 'expo-router';
import 'react-native-reanimated';


export default function RootLayout() {
  

  return (
  
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="listing/[id]" options={{ headerShown: false }} />
      </Stack>
     
  );
}
