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
                },
            },
            tr: {
                translation: {
                    chats: 'Sohbetler',
                    status: 'Güncellemeler',
                    calls: 'Aramalar',
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