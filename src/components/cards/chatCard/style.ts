import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

const BORDER_RADIUS = 25

export default StyleSheet.create({
    chatContainer: {
        flexDirection: "row",
        marginVertical: 12
    },
    chatImage: {
        width: 48,
        height: 48,
        borderRadius: BORDER_RADIUS,
        marginRight: 10
    },
    chatInfoView: {
        flex: 1,
        justifyContent: "space-evenly"
    },
    chatInfoInner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    chatName: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 16
    },
    chatDate: {
        fontSize: 12
    },
    chatMessage: {
        fontWeight: "600"
    },
    chatInvite: {
        color: colors.whatsAppGreen,
        fontSize: 16,
        fontWeight: "600",
        marginRight: 15
    }
})
