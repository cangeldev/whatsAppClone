import colors from "assets/colors/colors"
import { StyleSheet, Dimensions } from "react-native"

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: windowWidth * 0.04,
        paddingVertical: windowHeight * 0.03
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerText: {
        fontSize: 20,
        fontWeight: "600",
        color: colors.black
    },
    statusSection: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    userImageContainer: {
        alignSelf: "flex-start"
    },
    userImage: {
        width: 45,
        height: 45,
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
        color: colors.black,
        fontWeight: "600",
        fontSize: 17
    },
    statusDescription: {
        fontSize: 15
    },
    dividerLine: {
        marginVertical: 15,
        borderBottomWidth: 0.6,
        borderBottomColor: "#dddddd"
    },
    informationText: {
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
        padding: 12,
        borderRadius: 25,
        fontWeight: "700",
        marginVertical: 15,
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
        marginRight: -15
    }
})