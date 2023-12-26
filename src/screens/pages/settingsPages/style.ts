import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    headerContainer: {
        flexDirection: "row",
        paddingHorizontal: 17,
        paddingVertical: 10
    },
    profileImage: {
        width: 60,
        height: 60
    },
    textContainer: {
        marginLeft: 15,
        justifyContent: "center",
        flex: 1
    },
    nameText: {
        fontSize: 20,
        color: colors.black
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconStyle: {
        fontSize: 24,
        marginLeft: 15,
        color: colors.whatsAppGreen
    },
    dividerLine: {
        marginTop: 15,
        borderBottomWidth: 0.6,
        borderBottomColor: "#dddddd"
    },
    settingsContainer: {
        marginVertical: 15,
        marginHorizontal: 15
    },
    description: {
        alignSelf: "center",
        marginBottom: 7,
        marginTop: 20,
        fontSize: 15
    },
    title: {
        marginLeft: 5,
        color: colors.black,
        fontWeight: "600",
        fontSize: 16
    },
    titleView: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    metaImage: {
        width: 18,
        height: 18
    }
})