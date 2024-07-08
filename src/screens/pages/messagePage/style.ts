import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: colors.whatsAppGreen,
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: "center"
    },
    image: {
        width: 38,
        height: 38,
        borderRadius: 25,
        marginHorizontal: 10,
        resizeMode:"stretch"
    },
    headerTitle: {
        fontSize: 20,
        color: colors.white,
    },
    headerTitleButton: {
        flex: 1,
        justifyContent: "center",
        paddingVertical: 5
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerIcon: {
        fontSize: 20,
        color: colors.white,
        marginLeft: 20
    },
    backIcon: {
        fontSize: 24,
        color: colors.white
    },
    contentView: {
        marginBottom: 58
    }
})