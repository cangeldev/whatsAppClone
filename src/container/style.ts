import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    contactsPagesContainer: {
        flexDirection: "row"
    },
    contactsPagesIcon: {
        marginRight: 20,
        color: colors.white,
        fontSize: 20
    },
    contactsPagesTitle: {
        color: colors.white,
        fontSize: 15,
        marginLeft: -15
    },
    settingsNavigatorTitleStyle: {
        color: colors.white,
        fontSize: 23,
        marginLeft: -15
    }
})