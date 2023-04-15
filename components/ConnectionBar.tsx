import { Text, View, Pressable, Platform, Linking } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ConnectionBar = () => {
  return (
    <Pressable
      className="w-full p-3"
      onPress={() => {
        Platform.OS === "ios"
          ? Linking.openURL("App-Prefs:Bluetooth")
          : Linking.sendIntent("android.settings.BLUETOOTH_SETTINGS");
      }}
    >
      {({ pressed }) => (
        <View
          className={`w-auto flex-row items-center rounded-3xl bg-gray-100 px-5 py-3 shadow-sm ${
            pressed && "opacity-70"
          }`}
        >
          <View className="mr-3 h-3 w-3 rounded-full bg-red-500" />
          <View className="flex-1 flex-row items-center justify-between">
            <Text className="text-lg leading-none text-gray-400">
              Disconnected - Tap to connect...
            </Text>
            <FontAwesomeIcon icon={faAngleRight} size={20} color="#A1A1AA" />
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default ConnectionBar;
