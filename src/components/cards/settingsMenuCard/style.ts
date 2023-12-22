import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 25,
        paddingHorizontal: 10
    },
    textView: {
        marginHorizontal: 20,
        justifyContent: "center"
    },
    image: {
        width: 22,
        height: 22,
        tintColor: "#84979e"
    },
    title: {
        color: colors.black
    }
})