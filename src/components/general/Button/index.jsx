import { Pressable } from "react-native";

export default function Button({ onPress, children, style, onPressStyle, onLongPress, onPressOut }) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
          onPressStyle
        },
        [style],
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
      onPressOut={onPressOut}
    >
      {children}
    </Pressable>
  );
}
