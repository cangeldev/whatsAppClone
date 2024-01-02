import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    headerContainer: {
        paddingVertical: 10
    },
    title: {
        marginLeft: 15,
        fontWeight: "600"
    },
    contentView: {
        paddingTop: 20
    }
})