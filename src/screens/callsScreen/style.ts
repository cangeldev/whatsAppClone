import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    headerSection: {
        paddingHorizontal: 16,
        paddingVertical: 22,
        flexDirection: "row"
    },
    linkIcon: {
        fontSize: 28,
        color: colors.white,
        padding: 10,
        backgroundColor: colors.whatsAppGreen,
        borderRadius: 25
    },
    headerTitle: {
        fontWeight: "600",
        color: colors.black,
        fontSize: 16,
        paddingLeft: 15
    },
    headerDescription: {
        paddingLeft: 15,
        fontWeight: "500"
    },
    headerInnerSection: {
        justifyContent: "space-around"
    },
    sectionDivider: {
        marginVertical: 15,
        borderBottomWidth: 0.2,
        borderBottomColor: "#dddddd"
    },
    infoSection: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 50
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
        right: 18,
        bottom: 18
    },
    title: {
        marginLeft: 20,
        color: colors.black,
        fontWeight: "600",
        fontSize: 16
    }
})