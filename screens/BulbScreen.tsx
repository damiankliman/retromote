import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/HeaderBar";

const BulbScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <HeaderBar screenTitle="Bulb" />
      <Text>BulbScreen</Text>
    </SafeAreaView>
  );
};
export default BulbScreen;
