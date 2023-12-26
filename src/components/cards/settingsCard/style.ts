import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 10,
        alignItems:"center"
    },
    icon: {
        width: 22,
        height: 22,
        tintColor: "#84979e"
    },
    titleText: {
        color: colors.black,
        marginLeft: 20,
    }
})