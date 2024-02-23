import AsyncStorage from '@react-native-async-storage/async-storage';

export async function logCurrentStorage() {
    try {
        const keyArray = await AsyncStorage.getAllKeys();
        const keyValArray = await AsyncStorage.multiGet(keyArray);

        let myStorage = {};
        for (let keyVal of keyValArray) {
            myStorage[keyVal[0]] = keyVal[1];
        }

        return myStorage;
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error to handle it in the caller function if needed
    }
}

export async function clearStorage(){
    return await AsyncStorage.clear();
}
    