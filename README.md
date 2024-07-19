# WhatsApp Clone

This is a WhatsApp clone built with React Native and TypeScript. The app uses Firebase for phone number authentication, Firestore Database for storing user information, and Firebase Storage for profile pictures. It also utilizes Redux Toolkit for state management, AsyncStorage for local data persistence, and i18next for internationalization.

(Deficiencies, errors and internal pages of the application will continue to be added in the future.)

## Features

- Phone number authentication using Firebase Authentication
- Real-time messaging
- Profile picture upload and update
- User information storage in Firestore
- Local data persistence with AsyncStorage
- State management with Redux Toolkit
- Internationalization with i18next

## Technologies Used

- **React Native**
- **TypeScript**
- **Redux Toolkit**
- **AsyncStorage**
- **i18next**
- **Firebase Authentication**
- **Firestore Database**
- **Firebase Storage**

## Screen Recorder

https://github.com/user-attachments/assets/e0fa2333-d813-453f-aa0d-10617cb848e8

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Firebase project setup

### Installation

1. Clone the repository:
   ```sh
   https://github.com/cangeldev/whatsAppClone.git
   cd whatsAppClone
2. Clone the repository:
   ```sh
   npm install
   # or
   yarn install
3. Configure Firebase:

- **Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).**
- **Enable phone authentication.**
- **Set up Firestore Database and Firebase Storage.**
- **Download the `google-services.json` file and place it in your `android/app` directory.**
- **Download the `GoogleService-Info.plist` file and place it in your `ios/` directory.**


4. Clone the repository:
    ```sh
   npm run android
   # or
   npm run ios

## Usage

1. Open the app on your device or emulator.
2. Register with your phone number.
3. Set up your profile by adding a profile picture.
4. Start messaging other users in real-time.

## Project Structure

- `src/`: Contains all the source code.
  - `assets/`: İcons and images.
  - `components/`: Reusable components.
  - `screens/`: Application screens.
  - `services/firebase`: Firebase configuration and functions.
  - `services/redux/`: Redux setup and slices.
  - `services/asyncstorage/`: AsyncStorage configuration and functions.
  - `utils/i18n/`: Internationalization setup and translations.




