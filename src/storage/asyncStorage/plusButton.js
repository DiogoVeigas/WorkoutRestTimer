import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveButton = async (id, seconds) => {
    try {
        await AsyncStorage.setItem(`button${id}`, JSON.stringify(seconds))
    } catch (error) {
        console.error(error)
    }

};

export const getButtons = async () => {
    const buttonsTime = [];
    try {
        for (let id = 1; id < 3; id++) {
            const seconds = await AsyncStorage.getItem(`button${id}`);
            if (seconds !== null) {
                buttonsTime.push({[id]: Number(seconds)});
            }
        }
    } catch (e) {
        console.error(error)
    }

    return buttonsTime;
};