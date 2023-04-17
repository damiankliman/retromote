import { useState } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/HeaderBar";
import TimeSelector from "../components/TimeSelector";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

const BulbScreen = () => {
  const [timerValue, setTimerValue] = useState(10);

  const handleSetTimeRelease = () => {
    console.log("Release for", timerValue, "seconds");
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <HeaderBar screenTitle="Bulb" />
      <View className="flex-grow items-center justify-center">
        <TimeSelector timerValue={timerValue} setTimerValue={setTimerValue} />
        <Pressable onPressOut={() => handleSetTimeRelease()} className="mt-4">
          {({ pressed }) => (
            <View
              className={`aspect-square items-center rounded-full bg-gray-200 p-10 ${
                pressed ? "opacity-70" : ""
              }`}
            >
              <FontAwesomeIcon icon={faStopwatch} size={80} color="#A1A1AA" />
            </View>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default BulbScreen;
