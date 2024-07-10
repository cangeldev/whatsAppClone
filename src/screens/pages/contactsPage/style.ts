import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 15
    },
    headerContainer: {
        paddingVertical: 10
    },
    title: {
        fontWeight: "600",
        marginVertical: 10
    }
})