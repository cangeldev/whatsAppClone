import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const currentUser = (): FirebaseAuthTypes.User | null => {
  return auth().currentUser
}
export const handleSignOut = (navigation: any): void => {
  auth()
    .signOut()
    .then(() => {
      console.log('User signed out!')
      navigation.navigate('WelcomeScreen')
    })
    .catch((error) => {
      console.error('Error signing out:', error)
    })
}

// Function to sign in with phone number
export const signInWithPhoneNumber = async (phoneNumber: string): Promise<FirebaseAuthTypes.ConfirmationResult | null> => {
  try {
    return await auth().signInWithPhoneNumber("+90" + phoneNumber);
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Function to confirm the code
export const confirmCode = async (confirm: FirebaseAuthTypes.ConfirmationResult | null, code: string, profileName: string, profileImage: any): Promise<void> => {
  try {
    if (confirm) {
      const userCredential = await confirm.confirm(code);
      if (userCredential) {
        return;
      }
    }
  } catch (error) {
    console.error(error);
  }
};

// Function to save user profile to Firestore
export const saveUserProfile = async (uid: string, profileName: string, profileImageUrl: string | null): Promise<void> => {
  await firestore().collection('users').doc(uid).set({
    username: profileName,
    profileImageUrl: profileImageUrl,
  });
};

// Function to upload profile image to Firebase Storage
export const uploadProfileImage = async (uid: string, profileImage: any): Promise<string | null> => {
  if (profileImage) {
    const { uri } = profileImage;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const storageRef = storage().ref(`profile_images/${uid}/${filename}`);
    await storageRef.putFile(uri);
    return await storageRef.getDownloadURL();
  }
  return null;
};
