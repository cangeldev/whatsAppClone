import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    tabBar: {
        backgroundColor: colors.whatsAppGreen
    },
    indicatorStyle: {
        backgroundColor: colors.white,
        height: 2
    },
    labelStyle: {
        fontSize: 16,
        textTransform: 'none'
    },
    tabStyle: {
        width: 'auto'
    }
})