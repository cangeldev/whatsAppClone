// style.js
import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: '#84979e',
        marginRight: 20
    },
    titleText: {
        color: colors.black,
        fontSize: 17
    },
    textContainer: {
        flex: 1
    },
    switch: {
        borderRadius: 15,
        borderWidth: 1.5,
        alignSelf: 'flex-start'
    },
    switchEnabled: {
        backgroundColor: colors.whatsAppGreen,
        borderColor: colors.whatsAppGreen
    },
    switchDisabled: {
        backgroundColor: '#f1f2f6',
        borderColor: '#83919a'
    }
})
