import { bell, comment, face, key, loading, lock, music, photo, privates, question, time, web } from "assets"
import { RadioButtonProps } from "react-native-radio-buttons-group"

export const iconButtonList = [
    {
        id: 1,
        iconName: "android-messages",
        navigatePage: "MessagePages"
    },
    {
        id: 2,
        iconName: "phone",
        navigatePage: "MessagePages"
    },
    {
        id: 3,
        iconName: "video",
        navigatePage: "MessagePages"
    },
    {
        id: 4,
        iconName: "alert-circle-outline",
        navigatePage: "ProfileInfoPages"
    }
]

export const iconaddContactList = [
    {
        id: 1,
        iconName: "account-multiple",
        title: "newGroup"
    },
    {
        id: 2,
        iconName: "account-plus",
        title: "newContact"
    },
    {
        id: 3,
        iconName: "account-group",
        title: "newCommunity"
    }
]

export const profileInfoList = [
    {
        id: 1,
        iconName: "comment-text",
        name: "message"
    },
    {
        id: 2,
        iconName: "phone",
        name: "audio"
    },
    {
        id: 3,
        iconName: "video",
        name: "video"
    },

]

export const profileSettingList = [
    {
        id: 1,
        iconName: bell,
        title: "muteNotifications",
        switchStatus: true
    },
    {
        id: 2,
        iconName: music,
        title: "customNotifications",
        switchStatus: false
    },
    {
        id: 3,
        iconName: photo,
        title: "mediaVisibilitiy",
        switchStatus: false
    },
    {
        id: 4,
        iconName: lock,
        title: "encrypion",
        description: "encrypionText",
        switchStatus: false
    },
    {
        id: 5,
        iconName: time,
        title: "disapperingMessages",
        description: "disapperingMessagesText",
        switchStatus: false
    },
    {
        id: 6,
        iconName: privates,
        title: "chatLock",
        description: "chatLockText",
        switchStatus: true
    },
]

export const settingsList = [
    {
        id: 1,
        image: key,
        title: "account",
        text: "accountText"
    },
    {
        id: 2,
        image: lock,
        title: "privacy",
        text: "privacyText"
    },
    {
        id: 3,
        image: face,
        title: "avatar",
        text: "avatarText"
    },
    {
        id: 4,
        image: comment,
        title: "chats",
        text: "chatsText"
    },
    {
        id: 5,
        image: bell,
        title: "notifications",
        text: "notificationsText"
    },
    {
        id: 6,
        image: loading,
        title: "storageAndData",
        text: "storageAndDataText"
    },
    {
        id: 7,
        image: web,
        title: "appLanguage",
        text: "appLanguageText"
    },
    {
        id: 8,
        image: question,
        title: "help",
        text: "helpText"
    }
]

export const radioButtons: RadioButtonProps[] = [
    {
        id: '1',
        label: 'Türkçe   -   (Cihaz dili)',
        value: 'tr',
        size: 20,
        borderColor: "#008069",
        color: "#008069",
        labelStyle: {
            color: "black"

        }
    },
    {
        id: '2',
        label: 'English   -   İngilizce',
        value: 'en',
        size: 20,
        borderColor: "#008069",
        color: "#008069",
        labelStyle: {
            color: "black"
        }
    },
    {
        id: '3',
        label: 'Русский   -   Rusça',
        value: 'rusca',
        size: 20,
        borderColor: "#008069",
        color: "#008069",
        labelStyle: {
            color: "black"
        }
    },
    {
        id: '4',
        label: 'Azərbaycan dili   -   Azerbaycan dili',
        value: 'azerbaycan',
        size: 20,
        borderColor: "#008069",
        color: "#008069",
        labelStyle: {
            color: "black"
        }
    },
    {
        id: '5',
        label: 'Deutsch   -   Almanca',
        value: 'almanca',
        size: 20,
        borderColor: "#008069",
        color: "#008069",
        labelStyle: {
            color: "black"
        }
    },
    {
        id: '6',
        label: 'Français   -   Fransızca',
        value: 'fransızca',
        size: 20,
        borderColor: "#008069",
        color: "#008069",
        labelStyle: {
            color: "black"
        }
    },
    {
        id: '7',
        label: '日本語   -   Japonca',
        value: 'japonca',
        size: 20,
        borderColor: "#008069",
        color: "#008069",
        labelStyle: {
            color: "black"
        }
    },
    {
        id: '8',
        label: 'Polski   -   Lehçe',
        value: 'lehce',
        size: 20,
        borderColor: "#008069",
        color: "#008069",
        labelStyle: {
            color: "black"
        }
    },
    {
        id: '9',
        label: 'Dansk   -   Danca',
        value: 'danca',
        size: 20,
        borderColor: "#008069",
        color: "#008069",
        labelStyle: {
            color: "black"
        }
    },
    {
        id: '10',
        label: 'Hrvatski   -   Hırvatça',
        value: 'hırvatca',
        size: 20,
        borderColor: "#008069",
        color: "#008069",
        labelStyle: {
            color: "black"
        }
    },
    {
        id: '11',
        label: 'Shqip   -   Arnavutça',
        value: 'arnavutça',
        size: 20,
        borderColor: "#008069",
        color: "#008069",
        labelStyle: {
            color: "black"
        }
    },
]