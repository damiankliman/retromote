import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import ManualScreen from "./screens/ManualScreen";
import BulbScreen from "./screens/BulbScreen";
import TimerScreen from "./screens/TimerScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Manual" component={ManualScreen} />
        <Stack.Screen name="Bulb" component={BulbScreen} />
        <Stack.Screen name="Timer" component={TimerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
