import colors from 'assets/colors/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    inputContainer: {
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    messageInput: {
        backgroundColor: colors.white,
        borderRadius: 25,
        flex: 1,
        paddingLeft: 45,
        paddingRight: 70,
        fontSize: 18,
        minHeight: 45
    },
    inputIconContainer: {
        flexDirection: 'row',
        position: 'absolute',
        right: 45
    },
    microphoneIcon: {
        fontSize: 20,
        color: colors.white,
        backgroundColor: colors.whatsAppGreen,
        padding: 12,
        borderRadius: 100,
        marginLeft: 5,
        paddingHorizontal: 15
    },
    sendIcon: {
        fontSize: 20,
        color: colors.white,
        backgroundColor: colors.whatsAppGreen,
        padding: 12,
        borderRadius: 50,
        marginHorizontal: 5,
        paddingHorizontal: 12
    },
    inputEmojiIcon: {
        fontSize: 25,
        color: colors.grey,
        position: 'absolute',
        left: 12
    },
    inputIcon: {
        fontSize: 21,
        color: colors.grey,
        marginRight: 20
    },
    attachIcon: {
        width: 20,
        height: 20,
        tintColor: colors.grey,
        marginRight: 20
    }
})