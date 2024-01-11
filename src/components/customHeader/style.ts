import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({

    headerContainer: {
        backgroundColor: colors.whatsAppGreen,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    headerTitle: {
        fontSize: 23,
        color: colors.white
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerIcon: {
        fontSize: 20,
        color: colors.white
    },
    middleIcon: {
        fontSize: 20,
        marginHorizontal: 25,
        color: colors.white
    },
    menuOptionText: {
        fontSize: 16,
        color: colors.black,
        marginBottom: 15
    },
    menuOptionsContainer: {
        marginTop: 40,
        marginLeft: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingTop: 15
    }
})