import { FC } from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface HeaderBarProps {
  screenTitle: string;
}

const HeaderBar: FC<HeaderBarProps> = ({ screenTitle }) => {
  return (
    <View className="w-full flex-row items-center gap-3 p-3">
      <FontAwesomeIcon icon={faArrowLeft} size={30} color="#A1A1AA" />
      <Text className="text-xl text-gray-400">{screenTitle}</Text>
    </View>
  );
};
export default HeaderBar;
