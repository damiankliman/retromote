import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ConnectionBar = () => {
  return (
    <View className="flex-row items-center gap-3 px-4 py-4">
      <View className="h-3 w-3 animate-pulse rounded-full bg-red-500" />
      <View className="flex-1 flex-row items-center justify-between">
        <Text className="text-lg text-gray-400">Tap to connect...</Text>
        <FontAwesomeIcon icon={faAngleRight} size={20} color="#A1A1AA" />
      </View>
    </View>
  );
};

export default ConnectionBar;
