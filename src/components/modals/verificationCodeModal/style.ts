import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        paddingTop: 15
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
        fontWeight: "600"
    },
    infoText: {
        color: colors.black,
        marginTop: 25,
        textAlign: "center",
        paddingHorizontal: 20,
        marginBottom: 10
    },
    innerContainer: {
        flexDirection: "row"
    },
    number: {
        fontWeight: "700",
        color: colors.black
    },
    wrongNumber: {
        color: "#28728f"
    },
    numberInput: {
        fontSize: 18,
        borderBottomWidth: 1.6,
        borderBottomColor: colors.grey,
        marginVertical: 20,
        paddingVertical: -2,
        paddingHorizontal: 15,
        textAlign: "center"
    },
    receiveCodeText: {
        color: colors.whatsAppGreen,
        fontSize: 17,
        fontWeight: "600",
        flex: 1
    }
});
