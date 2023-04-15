import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

const ConnectionBar = () => {
  return (
    <View className="py-4 px-4 items-center flex-row gap-3 border-b">
      <FontAwesomeIcon icon={faCircleDot} />
      <View className="flex-row justify-between flex-1">
        <Text>Tap to connect...</Text>
        <Text>-7</Text>
      </View>
    </View>
  );
};

export default ConnectionBar;
