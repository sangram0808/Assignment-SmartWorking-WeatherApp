import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeKey = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) { }
};


export const getKey = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) { }
};