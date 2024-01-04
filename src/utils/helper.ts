import { bell, comment, example, face, key, loading, lock, music, photo, privates, question, time, web } from "assets"
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
        title: "Yeni grup"
    },
    {
        id: 2,
        iconName: "account-plus",
        title: "Yeni kişi"
    },
    {
        id: 3,
        iconName: "account-group",
        title: "Yeni topluluk"
    }
]

export const profileInfoList = [
    {
        id: 1,
        iconName: "comment-text",
        name: "Mesaj"
    },
    {
        id: 2,
        iconName: "phone",
        name: "Sesli"
    },
    {
        id: 3,
        iconName: "video",
        name: "Görüntülü"
    },

]

export const profileSettingList = [
    {
        id: 1,
        iconName: bell,
        title: "Bildirimleri sessize al",
        switchStatus: true
    },
    {
        id: 2,
        iconName: music,
        title: "Özel bildirimler",
        switchStatus: false
    },
    {
        id: 3,
        iconName: photo,
        title: "Medya görünürlüğü",
        switchStatus: false
    },
    {
        id: 4,
        iconName: lock,
        title: "Şifreleme",
        description: "Mesajlar ve aramalar uçtan uca şifrelidir. doğrulamak için dokunun.",
        switchStatus: false
    },
    {
        id: 5,
        iconName: time,
        title: "Süreli Mesajlar",
        description: "Kapalı",
        switchStatus: false
    },
    {
        id: 6,
        iconName: privates,
        title: "Sohbet kilidi",
        description: "Bu sohbeti bu cihazda kilitleyin ve gizleyin.",
        switchStatus: true
    },

]

export const settingsList = [
    {
        id: 1,
        image: key,
        title: "Hesap",
        text: "Güvenlik bildirimleri, numara değiştirme"
    },
    {
        id: 2,
        image: lock,
        title: "Gizlilik",
        text: "Kişileri engelleme, süreli mesajlar"
    },
    {
        id: 3,
        image: face,
        title: "Avatar",
        text: "Oluşturma, düzenleme, profil fotoğrafı"
    },
    {
        id: 4,
        image: comment,
        title: "Sohbetler",
        text: "Tema, duvar kağıtları, sohbet geçmişi"
    },
    {
        id: 5,
        image: bell,
        title: "Bildirimler",
        text: "Mesaj, grup ve arama sesleri"
    },
    {
        id: 6,
        image: loading,
        title: "Depolama ve veriler",
        text: "Ağ kullanımı, otomatik indirme"
    },
    {
        id: 7,
        image: web,
        title: "Uygulama dili",
        text: "Türkçe(cihaz dili)"
    },
    {
        id: 8,
        image: question,
        title: "Yardım",
        text: "Yardım merkezi, bize ulaşın, gizlilik ilkesi"
    }
]

export const radioButtons: RadioButtonProps[] = [
    {
        id: '1',
        label: 'Türkçe   -   (Cihaz dili)',
        value: 'turkce',
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
        value: 'ingilizce',
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