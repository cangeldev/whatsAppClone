import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    icon: {
        fontSize: 24,
        backgroundColor: colors.whatsAppGreen,
        color: colors.white,
        padding: 8,
        borderRadius: 30
    },
    title: {
        marginLeft: 15,
        fontSize: 16,
        color: colors.black,
        fontWeight: "700"
    },
    qrIcon: {
        position: "absolute",
        right: 20,
        fontSize: 24,
        color: colors.grey
    }
})