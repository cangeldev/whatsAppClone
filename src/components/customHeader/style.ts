import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: colors.whatsAppGreen,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    title: {
        fontSize: 23,
        marginLeft: 7,
        color: colors.white
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        fontSize: 20,
        color: colors.white
    },
    iconMiddle: {
        fontSize: 20,
        marginLeft: 25,
        marginRight: 22,
        color: colors.white
    }
})