import { bell, comment, face, key, loading, lock, question, web } from "assets"

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