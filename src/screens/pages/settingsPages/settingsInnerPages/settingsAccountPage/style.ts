import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 25
    },
    separator: {
        paddingVertical: 17
    },
    buttonView: {
        width: 100,
        alignItems: "center",
        alignSelf: "center"
    }
})