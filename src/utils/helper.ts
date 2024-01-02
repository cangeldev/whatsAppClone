import { bell, comment, example, face, key, loading, lock, music, photo, privates, question, time, web } from "assets"

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