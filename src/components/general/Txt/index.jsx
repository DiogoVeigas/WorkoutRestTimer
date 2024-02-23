import { Text } from "react-native";
import { defaultStyle } from "./styles";
import { responsiveSize } from "../../../styles/index";

export default function Txt({ children, style, size}) {
  return (
    <Text
      style={[defaultStyle.family, { fontSize: responsiveSize(size) }, style]}
    >
      {children}
    </Text>
  );
}

