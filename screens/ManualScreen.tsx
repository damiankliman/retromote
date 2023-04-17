import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import HeaderBar from "../components/HeaderBar";

const ManualScreen = () => {
  const handleShutterPress = () => {
    console.log("Pressed");
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <HeaderBar screenTitle="Manual" />
      <View className="flex-grow items-center justify-center">
        <Pressable
          className="rounded-full"
          onPressIn={() => handleShutterPress()}
        >
          {({ pressed }) => (
            <View
              className={`h-64 w-64 items-center justify-center rounded-full bg-gray-100 ${
                pressed && "opacity-70"
              }`}
            >
              <FontAwesomeIcon
                icon={faCameraRetro}
                size={100}
                color="#A1A1AA"
              />
            </View>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default ManualScreen;
