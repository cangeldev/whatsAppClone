import auth from '@react-native-firebase/auth' //Firebase

export const handleSendCode = async (phoneNumber: string) => {
    try {
        const confirmation = await auth().signInWithPhoneNumber(("+90" + phoneNumber))
        console.log(confirmation.verificationId)
        return confirmation.verificationId

    } catch (error) {
        console.error('Phone authentication error:', error)
    }
}

export const handleConfirmCode = async (verificationId: string, confirmCode: string, navigation: any, closeModal: () => void) => {
    try {
        const credential = auth.PhoneAuthProvider.credential(verificationId, confirmCode)
        await auth().signInWithCredential(credential)
        navigation.navigate('UserLoginInfoPage')
        closeModal()
    } catch (error) {
        console.log("hatalı giriş")
       
    }
}

export const handleSignOut = (navigation: any): void => {
    auth()
        .signOut()
        .then(() => {
            console.log('User signed out!')
            navigation.navigate("WelcomeScreen")
        })
}

export const currentUser = () => {
    return auth().currentUser
}