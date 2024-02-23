import { ToastAndroid } from "react-native";

import strings from "../../res/strings";

export const modalToasts = (language) => {
    const stringsToUse = strings(language);

    const changesSaved = () => {
        ToastAndroid.showWithGravityAndOffset(stringsToUse.changesSaved, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 25);
    }

    const changesCanceled = () => {
        ToastAndroid.showWithGravityAndOffset(stringsToUse.changesCanceled, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 25);
    }

    return {
        changesSaved,
        changesCanceled
    }
}

export const themeToast = (language) => {
    const stringsToUse = strings(language);
    ToastAndroid.showWithGravityAndOffset(stringsToUse.themeChanged, ToastAndroid.SHORT, ToastAndroid.TOP, 0, 40);
}

export const languageToast = (language) => {
    const stringsToUse = strings(language);
    ToastAndroid.showWithGravityAndOffset(stringsToUse.languageChange, ToastAndroid.SHORT, ToastAndroid.TOP, 0, 40);
}