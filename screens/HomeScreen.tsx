import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import ConnectionBar from "../components/ConnectionBar";
import ModeButton from "../components/ModeButton";

const modes = [
  {
    text: "M",
    onPress: () => {
      console.log("Manual mode");
    },
  },
  {
    text: "B",
    onPress: () => {
      console.log("Bulb mode");
    },
  },
  {
    text: "T",
    onPress: () => {
      console.log("Bulb timer mode");
    },
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ConnectionBar />
      <View className="w-full flex-grow flex-col items-center justify-center">
        {modes.map((mode, index) => (
          <ModeButton key={index} text={mode.text} onPress={mode.onPress} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
