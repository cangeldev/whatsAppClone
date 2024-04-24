import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import 'intl-pluralrules'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    chats: 'Chats',
                    status: 'Status',
                    calls: 'Calls',
                    newGroup: 'New group',
                    newContact: 'New contact',
                    newCommunity: 'New community',
                    WhatsAppContacts: "WhatsApp Contacts",
                    invitetoWhatsApp: "Invite to WhatsApp",
                    invite: "Invite",
                    ChatscreenTextOne: "Tap and hold a chat for more options",
                    infoTextOne: "Your personal messages are",
                    infoTextTwo: "end-to-end encrypted",
                    myStatus: 'My status',
                    statusScreenTextOne: 'Tap to add status update',
                    channels: "Channels",
                    statusScreenTextTwo: "Stay updated on topics that matter to you. Find channels to follow below.",
                    exploreMore: "Explore more",
                    follow: "Follow",
                    callScreentextOne: "Create call link",
                    callScreentextTwo: "Share a link for your WhatsApp call",
                    recent: "Recent",
                    newBroadcast: "New broadcast",
                    linkedDevices: "Linked devices",
                    starredMessages: "Starred messages",
                    settings: "Settings",
                    inviteAFriend: "Invite a friend",
                    account: "Account",
                    accountText: "Security notifications, change number",
                    privacy: "Privacy",
                    privacyText: "Block contacts, disappering messages",
                    avatar: "Avatar",
                    avatarText: "Create, edit, profile photo",
                    chatsText: "Theme, wallpapers, chat history",
                    notifications: "Notifications",
                    notificationsText: "Message, group & call tones",
                    storageAndData: "Storage and data",
                    storageAndDataText: "Network usage, auto-download",
                    appLanguage: "App language",
                    appLanguageText: "English",
                    help: "Help",
                    helpText: "Help center, contact us privacy policy",
                    message: "Message",
                    audio: "Audio",
                    video: "Video",
                    muteNotifications: "Mute notifications",
                    customNotifications: "Custom notifications",
                    mediaVisibilitiy: "Media visibilitiy",
                    encrypion: "Encryption",
                    encrypionText: "Messages and calls are end-to-end encrypted. Tab to verify.",
                    disapperingMessages: "Disappering messages",
                    disapperingMessagesText: "Off",
                    chatLock: "Chat lock",
                    chatLockText: "Lock and hide this chat on this device.",
                    block: "Block Can",
                    report: "Report Can",
                    securityNotifications: "Security Notifications",
                    passkeys: "Passkeys",
                    emailAdress: "Enail address",
                    twoVerification: "Two-step verification",
                    changeNumber: "Change number",
                    requestInfo: "Request account info",
                    addAccount: "Add account",
                    deleteAccount: "Delete account",
                    enterYourNumber: "Enter your phone number",
                    verifyYourAccount: "WhatsApp will need to verify your account.",
                    whatsMyNumber: "What's my number?",
                    turkey: "Turkey",
                    carrierChargesMayApply: "Carrier charges may apply",
                    next: "Next",
                    phoneNumber: "phone number",
                    verifyingyournumber: "Verifying your number",
                    verifyingInfo: "Waiting to automatically detect an SMS sent to",
                    wrongNumber: "Wrong number?",
                    didntReceiveCode: "Didn't receive code?",
                    profileInfo: "Profil bilgisiDOLDUR",
                    profileInfoText: "Lütfen adınızı girin ve isteğe bağlı olarak profil fotoğrafınızı ekleyindOLDUR",
                    writeYourNameHere: "Adınızı buraya yazınDOLDUR",
                    profilePhoto: "Profile photo",
                    camera: "Camera",
                    galery: "Galery",
                    loginFailed: "Login failed",
                    loginFailedText: "Please enter an available phone number",
                    nameFailedText: "Please enter an available username",
                    exit: "Exit"
                },
            },
            tr: {
                translation: {
                    chats: 'Sohbetler',
                    status: 'Güncellemeler',
                    calls: 'Aramalar',
                    newGroup: 'Yeni grup',
                    newContact: 'Yeni kişi',
                    newCommunity: 'Yeni topluluk',
                    WhatsAppContacts: "WhatsApp'taki kişiler",
                    invitetoWhatsApp: "WhatsApp'a davet et",
                    invite: "Davet et",
                    ChatscreenTextOne: "Daha fazla seçenek için istediğiniz sohbeti basılı tutun",
                    infoTextOne: " Kişisel mesajlarınız",
                    infoTextTwo: "uçtan uca şifrelidir",
                    myStatus: 'Durumum',
                    statusScreenTextOne: 'Durum güncellemesi eklemek için dokunun',
                    channels: "Kanallar",
                    statusScreenTextTwo: "İlginizi çeken konulardaki son gelişmelerden haberdar olun. Takip edebileceğiniz kanalları aşağıda bulabilirsiniz.",
                    exploreMore: "Daha fazlasını keşfet",
                    follow: "Takip et",
                    callScreentextOne: "Arama bağlantısı oluştur",
                    callScreentextTwo: "WhatsApp aramanız için bağlantı paylaşın",
                    recent: "En son",
                    newBroadcast: "Yeni toplu mesaj",
                    linkedDevices: "bağlı cihazlar",
                    starredMessages: "Yıldızlı mesajlar",
                    settings: "Ayarlar",
                    inviteAFriend: "Arkadaşları davet edin",
                    account: "Hesap",
                    accountText: "Güvenlik bildirimleri, numara değiştirme",
                    privacy: "Gizlilik",
                    privacyText: "Kişileri engelleme, süreli mesajlar",
                    avatar: "Avatar",
                    avatarText: "Oluşturma, düzenleme, profil fotoğrafı",
                    chatsText: "Tema, duvar kağıtları, sohbet geçmişi",
                    notifications: "Bildirimler",
                    notificationsText: "Mesaj, grup ve arama sesleri",
                    storageAndData: "Depolama ve veriler",
                    storageAndDataText: "Ağ kullanımı, otomatik indirme",
                    appLanguage: "Uygulama dili",
                    appLanguageText: "Türkçe(Cihaz dili)",
                    help: "Yardım",
                    helpText: "Yardım merkezi, bize ulaşın, gizlilik ilkesi",
                    message: "Mesaj",
                    audio: "Sesli",
                    video: "Görüntülü",
                    muteNotifications: "Bildirimleri sesize al",
                    customNotifications: "Özel bildirimler",
                    mediaVisibilitiy: "Medya görünürlüğü",
                    encrypion: "Şifreleme",
                    encrypionText: "Mesajlar ve aramalar uçtan uca şifrelidir. doğrulamak için dokunun.",
                    disapperingMessages: "Süreli mesajlar",
                    disapperingMessagesText: "Kapalı",
                    chatLock: "Sohbet kilidi",
                    chatLockText: "Bu sohbeti bu cihazda kilitleyin ve gizleyin.",
                    block: "Can kişisini engelle",
                    report: "Can kişisini şikayet et",
                    securityNotifications: "Güvenlik bildirimleri",
                    passkeys: "Geçiş anahtarları",
                    emailAdress: "E-posta doğrulama",
                    twoVerification: "İki adımlı doğrulama",
                    changeNumber: "Numara değiştir",
                    requestInfo: "Hesap bilgilerini talep et",
                    addAccount: "Hesap ekle",
                    deleteAccount: "Hesabı sil",
                    enterYourNumber: "Telefon numaranızı girin",
                    verifyYourAccount: "WhatsApp'ın hesabınızı doğrulaması gerekecek.",
                    whatsMyNumber: "Numaram nedir?",
                    turkey: "Türkiye",
                    carrierChargesMayApply: "Operatörünüz tarafından ücret uygulanabilir",
                    next: "İleri",
                    phoneNumber: "telefon numarası",
                    verifyingyournumber: "Numaranız doğrulanıyor",
                    verifyingInfo: "Telefonuza gönderilen SMS'in otomatik olarak algılanması bekleniyor.",
                    wrongNumber: "Numara yanlış mı?",
                    didntReceiveCode: "Kodu almadınız mı?",
                    profileInfo: "Profil bilgisi",
                    profileInfoText: "Lütfen adınızı girin ve isteğe bağlı olarak profil fotoğrafınızı ekleyin",
                    writeYourNameHere: "Adınızı buraya yazın",
                    profilePhoto: "Profil fotoğrafı",
                    camera: "Kamera",
                    galery: "Galeri",
                    loginFailed: "Hatalı giriş",
                    loginFailedText: "Lütfen kullanılabilir  telefon numarası girin",
                    nameFailedText: "Lütfen kullanılabilir  kullanıcı adı girin",
                    exit: "Çıkış"
                },
            },
        },
        lng: 'tr',
        fallbackLng: 'tr',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n