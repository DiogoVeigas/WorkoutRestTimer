import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveScheme = async (scheme) => {
    try {
        await AsyncStorage.setItem("scheme", scheme)
    } catch (error) {
        console.error(error)
    }
};

export const getScheme = async () => {
    try {
        const scheme = await AsyncStorage.getItem("scheme");
        return scheme;
    } catch (e) {
        console.error(error)
    }
};