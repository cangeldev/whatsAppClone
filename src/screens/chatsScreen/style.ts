import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 22,
        paddingBottom: 50
    },
    text: {
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 12,
        marginTop: 15,
        color: colors.grey
    },
    divider: {
        marginVertical: 15,
        borderBottomWidth: 0.2,
        borderBottomColor: "#dddddd"
    },
    infoView: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        fontSize: 12, marginRight: 6
    },
    infoText: {
        fontSize: 12
    },
    innerInfoText: {
        color: colors.whatsAppGreen
    }
})