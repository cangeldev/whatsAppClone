import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        flexDirection: "row",
        marginBottom: 25
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 25,
        backgroundColor: colors.whatsAppGreen,
        marginRight: 10
    },
    infoView: {
        flex: 1,
        justifyContent: "space-evenly"
    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    name: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 16
    },
    date: {
        fontSize: 12,
        paddingRight: 3
    },
    message: {
        fontWeight: "600"
    }
})