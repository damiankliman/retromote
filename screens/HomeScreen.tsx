import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import ConnectionBar from "../components/ConnectionBar";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <ConnectionBar />
      <View className="h-full">
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
