import { FC } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface HeaderBarProps {
  screenTitle: string;
}

const HeaderBar: FC<HeaderBarProps> = ({ screenTitle }) => {
  const navigation = useNavigation();

  return (
    <View className="w-full flex-row items-center gap-3 p-3">
      <Pressable onPressOut={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} size={30} color="#3F3F46" />
      </Pressable>
      <Text className="text-xl font-medium text-gray-700">{screenTitle}</Text>
    </View>
  );
};
export default HeaderBar;
