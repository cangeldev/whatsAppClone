import AsyncStorage from '@react-native-async-storage/async-storage' //AsyncStorage

export const saveLanguage = async (language: any) => {
    try {
        await AsyncStorage.setItem('language', language)
    } catch (error) {
        console.error('Dil seçme kaydetme hatası:', error)
    }
}

export const saveUsernameAsync = async (username: string, navigation: any) => {
    try {
        await AsyncStorage.setItem('username', username)
        navigation.navigate("HomeScreen")
    } catch (error) {
        console.error('Kullanıcı adını kaydetme hatası:', error)
    }
}

export const saveProfileImage = async (profileImage: any, closeModal: () => void) => {
    try {
        await AsyncStorage.setItem('profileImage', profileImage)
        closeModal()
    } catch (error) {
        console.error('Profil resmi kaydetme hatası:', error)
    }
}

export const getProfilePhoto = async () => {
    try {
        const profileImage = await AsyncStorage.getItem('profileImage')
        return profileImage
    } catch (error) {
        console.error('Kullanıcı resmini alma hatası:', error)
        return null
    }
}