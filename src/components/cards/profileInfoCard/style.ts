import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#f5f5f5",
        alignItems: "center",
        paddingVertical: 13,
        width: 113,
    },
    title: {
        color: colors.black,
        fontSize: 15,
    },
    icon: {
        fontSize: 24,
        color: colors.whatsAppGreen
    }
})
