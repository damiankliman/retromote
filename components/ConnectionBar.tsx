import { Text, View } from "react-native";

const ConnectionBar = () => {
  return (
    <View className="py-4 px-4 items-center flex-row gap-3 border-b">
      <Text>O</Text>
      <View className="flex-row justify-between flex-1">
        <Text>Tap to connect...</Text>
        <Text>-7</Text>
      </View>
    </View>
  );
};

export default ConnectionBar;
