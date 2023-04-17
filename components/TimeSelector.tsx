import { FC } from "react";
import { View, Pressable, TextInput, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

interface TimeSelectorProps {
  timerValue: number;
  setTimerValue: (value: number) => void;
}

const TimeSelector: FC<TimeSelectorProps> = ({ timerValue, setTimerValue }) => {
  const handleUpdateTimerValue = (value: string) => {
    if (value === "" || parseInt(value) <= 0) {
      return setTimerValue(0);
    }
    setTimerValue(parseInt(value));
  };

  return (
    <View className="flex-row items-center">
      <Pressable
        onPressIn={() =>
          timerValue > 0 ? setTimerValue(timerValue - 1) : null
        }
      >
        <FontAwesomeIcon icon={faCaretLeft} size={120} color="#A1A1AA" />
      </Pressable>
      <View className="relative">
        <TextInput
          value={!timerValue ? "" : timerValue.toString()}
          onChange={({ nativeEvent }) => {
            handleUpdateTimerValue(nativeEvent.text);
          }}
          inputMode="numeric"
          textAlign="center"
          returnKeyType="done"
          className="h-20 w-36 items-center justify-center rounded-xl bg-gray-200 text-center text-5xl font-semibold leading-[55px] text-gray-500"
        />
        <Text className="absolute bottom-1 right-2 font-semibold text-gray-400">
          S
        </Text>
      </View>
      <Pressable onPressIn={() => setTimerValue(timerValue + 1)}>
        <FontAwesomeIcon icon={faCaretRight} size={120} color="#A1A1AA" />
      </Pressable>
    </View>
  );
};
export default TimeSelector;
