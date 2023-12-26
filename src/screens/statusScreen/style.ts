import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 30,
        alignItems: "center"
    },
    headerText: {
        fontSize: 20,
        fontWeight: "600",
        color: colors.black
    },
    statusSection: {
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    userImageContainer: {
        alignSelf: "flex-start"
    },
    userImage: {
        width: 45,
        height: 45
    },
    plusIcon: {
        position: "absolute",
        fontSize: 20,
        color: colors.whatsAppGreen,
        right: -4,
        bottom: -4,
        backgroundColor: colors.white,
        borderRadius: 25
    },
    statusTitle: {
        marginHorizontal: 14,
        color: colors.black,
        fontWeight: "600",
        fontSize: 17
    },
    statusDescription: {
        marginHorizontal: 14,
        fontSize: 15
    },
    dividerLine: {
        marginTop: 15,
        borderBottomWidth: 0.6,
        borderBottomColor: "#dddddd"
    },
    informationText: {
        marginHorizontal: 20,
        marginVertical: 10,
        lineHeight: 20
    },
    addButtonContainer: {
        position: "absolute",
        right: 18,
        bottom: 18
    },
    exploreButtonText: {
        color: colors.white,
        backgroundColor: colors.whatsAppGreen,
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 25,
        fontWeight: "700",
        margin: 20,
        alignSelf: "flex-start"
    },
    editIcon: {
        position: "absolute",
        fontSize: 24,
        color: colors.whatsAppGreen,
        backgroundColor: "#e0fef2",
        padding: 8,
        right: 25,
        bottom: 95,
        borderRadius: 10,
        elevation: 4
    },
    channelCardsContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 10
    }
})