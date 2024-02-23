import { StyleSheet } from "react-native";

import { useContext } from "react";
import { ColorSchemeContext } from "../../../../storage/context/SchemeProvider";
import { getColorsByScheme } from "../../../../styles/index";

export const defaultStyle = () => {
    const { colorScheme } = useContext(ColorSchemeContext);

    return StyleSheet.create({
        text: {
            color: getColorsByScheme(colorScheme).text,
        },
        button: {
            borderRadius: 10,
            borderWidth: 6,
            borderColor: getColorsByScheme(colorScheme).text,
            paddingVertical: 2,
            paddingHorizontal: 6,
        },
        buttonPress: {},
    });
}