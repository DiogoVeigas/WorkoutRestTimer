import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveLanguage = async (language) => {
    try {
        await AsyncStorage.setItem("language", language)
    } catch (error) {
        console.error(error)
    }
};

export const getLanguage = async () => {
    try {
        const language = await AsyncStorage.getItem("language");
        return language;
    } catch (e) {
        console.error(error)
    }
};