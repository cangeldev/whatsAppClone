import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 25
    },
    textContainer: {
        marginLeft: 20,
        justifyContent: "center"
    },
    icon: {
        width: 22,
        height: 22,
        tintColor: "#84979e"
    },
    titleText: {
        color: colors.black
    }
})