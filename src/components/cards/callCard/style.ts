import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        marginTop: 25,
        paddingHorizontal: 18,
        flexDirection: "row",
        alignItems: "center"
    },
    textView: {
        flex: 1,
    },
    textViewTitle: {
        color: colors.red,
        fontSize: 17,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 25,
        marginRight: 10
    },
    icon: {
        fontSize: 22,
        color: colors.whatsAppGreen
    },
    dateView: {
        alignItems: "center",
        flexDirection: "row"
    }
})