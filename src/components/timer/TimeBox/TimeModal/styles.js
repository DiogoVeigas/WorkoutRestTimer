import { StyleSheet } from "react-native";

import { useContext } from "react";
import { ColorSchemeContext } from "../../../../storage/context/SchemeProvider";
import { getColorsByScheme } from "../../../../styles/index";

import { useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native-web";


export const defaultStyle = () => {
    const { colorScheme } = useContext(ColorSchemeContext);

    const { width, height } = useWindowDimensions();

    return StyleSheet.create({
        text: {
            color: getColorsByScheme(colorScheme).text,
        },
        title: {
            textAlign: "center",
        },
        icon: {
            paddingTop: 15,
        },
        horizontalMenu: {
            flexDirection: "row",
            justifyContent: "center",
        },
        currentTimeDisplay: {
            paddingHorizontal: 20,
        },
        buttonsContainer: {
            flexDirection: "row",
            justifyContent: "space-around",
        },
        buttonCancel: {
            borderRadius: 5,
            borderWidth: 2.5,
            borderColor: getColorsByScheme(colorScheme).error,
            paddingHorizontal: 10,
            padding: 5,
        },
        textCancel: {
            color: getColorsByScheme(colorScheme).error,
        },
        buttonSave: {
            borderRadius: 5,
            borderWidth: 2.5,
            borderColor: getColorsByScheme(colorScheme).success,
            padding: 5,
            paddingHorizontal: 17,
            backgroundColor: getColorsByScheme(colorScheme).success,
        },
        textSave: {
            color: getColorsByScheme(colorScheme).background,
        },
        transparency: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)"
        },
        background: {
            backgroundColor: getColorsByScheme(colorScheme).background,
            width: "85%",
            padding: 25,
            borderRadius: 10,

            height: 260,
            justifyContent: "space-between",
        },
    });
}