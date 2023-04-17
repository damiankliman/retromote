import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import ConnectionBar from "../components/ConnectionBar";
import ModeButton from "../components/ModeButton";

const modes = [
  {
    text: "M",
    targetScreen: "ManualScreen",
  },
  {
    text: "B",
    targetScreen: "BulbScreen",
  },
  {
    text: "T",
    targetScreen: "TimerScreen",
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ConnectionBar />
      <View className="w-full flex-grow flex-col items-center justify-center">
        {modes.map((mode, index) => (
          <ModeButton
            key={index}
            text={mode.text}
            targetScreen={mode.targetScreen}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
