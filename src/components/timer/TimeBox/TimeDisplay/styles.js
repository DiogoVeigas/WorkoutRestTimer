import { StyleSheet } from "react-native";

import { useContext } from "react";
import { ColorSchemeContext } from "../../../../storage/context/SchemeProvider";
import { getColorsByScheme } from "../../../../styles/index";

export const defaultStyle = () => {
    const { colorScheme } = useContext(ColorSchemeContext);

    return StyleSheet.create({
        text: {
            color: getColorsByScheme(colorScheme).highlight,
        },
    });
}