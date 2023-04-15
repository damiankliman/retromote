import { FC } from "react";
import { Pressable, Text, View } from "react-native";

interface ModeButtonProps {
  text: string;
  onPress: () => void;
}

const ModeButton: FC<ModeButtonProps> = ({ text, onPress }) => {
  return (
    <Pressable onPressOut={onPress} className="w-40">
      {({ pressed }) => (
        <View
          className={`mb-8 block w-auto max-w-fit items-center justify-center rounded-2xl bg-gray-100 p-4 shadow-sm ${
            pressed && "opacity-70"
          }`}
        >
          <Text className="-mb-5 mt-1 items-center justify-center text-center text-9xl text-gray-700">
            {text}
          </Text>
        </View>
      )}
    </Pressable>
  );
};
export default ModeButton;
