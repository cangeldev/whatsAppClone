import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
        marginHorizontal: 15
    },
    headerSection: {
        paddingVertical: 22,
        flexDirection: "row"
    },
    linkIcon: {
        fontSize: 28,
        borderRadius: 25,
        color: colors.white,
        padding: 10,
        backgroundColor: colors.whatsAppGreen
    },
    headerTitle: {
        fontWeight: "600",
        color: colors.black,
        fontSize: 16
    },
    headerDescription: {
        fontWeight: "500"
    },
    headerInnerSection: {
        justifyContent: "space-around",
        paddingLeft: 15
    },
    sectionDivider: {
        marginVertical: 15,
        borderBottomWidth: 0.2,
        borderBottomColor: "#dddddd"
    },
    infoSection: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    infoIcon: {
        fontSize: 12,
        marginRight: 6
    },
    infoText: {
        fontSize: 12
    },
    innerInfoTextHighlight: {
        color: colors.whatsAppGreen
    },
    floatingButtonSection: {
        position: "absolute",
        right: 5,
        bottom: 10
    },
    title: {
        color: colors.black,
        fontWeight: "600",
        fontSize: 16
    }
})