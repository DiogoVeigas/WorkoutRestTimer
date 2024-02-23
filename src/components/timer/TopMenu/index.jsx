import { View } from "react-native";
import ThemeButton from "./ThemeButton/index";
import SettingsButton from "./SettingsButton/index";
import { defaultStyle } from "./styles";

export default function TopMenu() {
  return (
    <View style={defaultStyle.mainContainer}>
      <ThemeButton />
      <SettingsButton />
    </View>
  );
}
