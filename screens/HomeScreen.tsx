import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import ConnectionBar from "../components/ConnectionBar";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ConnectionBar />
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
