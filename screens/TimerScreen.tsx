import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/HeaderBar";

const TimerScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <HeaderBar screenTitle="Timer" />
      <Text>TimerScreen</Text>
    </SafeAreaView>
  );
};
export default TimerScreen;
