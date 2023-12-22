import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    headerView: {
        flexDirection: "row",
        paddingHorizontal: 17,
        paddingVertical: 10
    },
    image: {
        width: 60,
        height: 60
    },
    textView: {
        marginLeft: 15,
        justifyContent: "center",
        flex: 1
    },
    name: {
        fontSize: 20,
        color: colors.black
    },
    iconView: {
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        fontSize: 24,
        marginLeft: 15,
        color: colors.whatsAppGreen
    },
    divider: {
        marginTop: 15,
        borderBottomWidth: 0.6,
        borderBottomColor: "#dddddd"
    },
})