import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

const BORDER_RADIUS = 25;

export default StyleSheet.create({
    chatContainer: {
        paddingHorizontal: 12,
        flexDirection: "row",
        marginBottom: 24
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
        fontSize: 12,
        paddingRight: 5
    },
    chatMessage: {
        fontWeight: "600"
    }
})
