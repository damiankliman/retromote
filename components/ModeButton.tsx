import { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface ModeButtonProps {
  text: string;
  targetScreen: string;
}

const ModeButton: FC<ModeButtonProps> = ({ text, targetScreen }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPressOut={() => navigation.navigate(targetScreen as never)}
      className="w-40"
    >
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
