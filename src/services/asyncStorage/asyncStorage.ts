import AsyncStorage from '@react-native-async-storage/async-storage' //AsyncStorage

export const saveLanguage = async (language: any) => {
    try {
        await AsyncStorage.setItem('language', language)
    } catch (error) {
        console.error('Dil seçme kaydetme hatası:', error)
    }
}