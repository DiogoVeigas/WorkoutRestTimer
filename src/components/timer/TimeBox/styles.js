import { StyleSheet, useWindowDimensions } from "react-native";

import { useContext } from "react";
import { ColorSchemeContext } from "../../../storage/context/SchemeProvider";
import { getColorsByScheme } from "../../../styles/index";

export function defaultStyle() {
    const { colorScheme } = useContext(ColorSchemeContext);
    const { width, height } = useWindowDimensions();

    const circleSize = height < 700 ? 300 : 320;

    return StyleSheet.create({
        mainContainer: {
            flex: 6,
            justifyContent: "space-between",
            alignItems: "center",
        },
        displayContainerHeightWrapper: {
            height: circleSize,  // Set the height to the desired value
        },
        displayContainer: {
            flex: 2,
            alignItems: "center",
            justifyContent: "center",

            borderWidth: 10,
            borderColor: getColorsByScheme(colorScheme).text,
            borderRadius: 1000,
            width: circleSize,
            height: circleSize,
        },
        buttonsContainer: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: width * 0.1,
        },
        plusButtonsContainer: {
            flexDirection: "row",
            justifyContent: "center",
            gap: width * 0.1,
        },
    });
}