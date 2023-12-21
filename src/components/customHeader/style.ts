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
    },
    optionText: {
        fontSize: 16,
        color: colors.black,
        marginBottom: 15
    },
    optionsContainerStyle: {
        marginTop: 40,
        marginLeft: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingTop: 15
    }
})