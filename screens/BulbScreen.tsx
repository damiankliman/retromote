import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/HeaderBar";
import TimeSelector from "../components/TimeSelector";

const BulbScreen = () => {
  const [timerValue, setTimerValue] = useState(10);

  return (
    <SafeAreaView className="h-full bg-white">
      <HeaderBar screenTitle="Bulb" />
      <View className="flex-grow items-center justify-center">
        <TimeSelector timerValue={timerValue} setTimerValue={setTimerValue} />
      </View>
    </SafeAreaView>
  );
};

export default BulbScreen;
