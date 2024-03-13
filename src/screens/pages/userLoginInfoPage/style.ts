import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingVertical: 15,
        alignItems: "center",
        paddingHorizontal: 15
    },
    icon: {
        color: colors.grey,
        position: "absolute",
        right: 15,
        top: 20
    },
    title: {
        color: colors.whatsAppGreen,
        fontSize: 18,
        fontWeight: "700"
    },
    infoText: {
        textAlign: "center",
        paddingHorizontal: 20,
        marginVertical: 30,
        fontSize: 15
    },
    inputView: {
        flexDirection: "row",
        alignItems: "center"
    },
    textInput: {
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: colors.whatsAppGreen,
        paddingBottom: -3,
        fontSize: 16
    },
    emojiIcon: {
        marginTop: 12,
        marginLeft: 3
    },
    profileImageView: {
        width: 100,
        height: 100,
        overflow: "hidden",
        borderRadius: 100,
        marginBottom: 25
    },
    buttonView: {
        flex: 1,
        justifyContent: "flex-end"
    }
})