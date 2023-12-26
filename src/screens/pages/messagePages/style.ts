import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: colors.whatsAppGreen,
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: "center"
    },
    image: {
        width: 38,
        height: 38,
        borderRadius: 25,
        marginHorizontal: 10
    },
    headerTitle: {
        fontSize: 20,
        color: colors.white,
        flex: 1
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerIcon: {
        fontSize: 20,
        color: colors.white,
        marginLeft: 20
    },
    backIcon: {
        fontSize: 24,
        color: colors.white,
        marginRight: 10
    },
    inputContainer: {
        position: "absolute",
        bottom: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    inputIcon: {
        fontSize: 21,
        color: colors.grey,
        marginRight: 20
    },
    attachIcon: {
        width: 20,
        height: 20,
        tintColor: colors.grey,
        marginRight: 12
    },
    microphoneIcon: {
        fontSize: 20,
        color: colors.white,
        backgroundColor: colors.whatsAppGreen,
        padding: 12,
        borderRadius: 50,
        marginHorizontal: 5,
        paddingHorizontal: 15
    },
    inputEmojiIcon: {
        fontSize: 25,
        color: colors.grey,
        position: "absolute",
        left: 12
    },
    messageInput: {
        backgroundColor: colors.white,
        borderRadius: 25,
        flex: 1,
        paddingLeft: 45,
        paddingRight: 70,
        marginLeft: 5,
        fontSize: 18,
        minHeight: 45
    },
    inputIconContainer: {
        flexDirection: "row",
        position: "absolute",
        right: 45
    }
})