import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        paddingVertical: 15,
        borderWidth: 0.8,
        borderColor: "#d3d3d3",
        borderRadius: 12,
        marginRight: 10,
        alignItems: "center"
    },
    image: {
        width: 60,
        height: 60
    },
    title: {
        color: colors.black,
        fontSize: 15,
        marginVertical: 10,
        width: 110,
        marginHorizontal: 10
    },
    iconView: {
        position: "absolute",
        right: 0,
        bottom: 0,
        padding: 2,
        backgroundColor: colors.white,
        borderRadius: 25
    },
    imageIcon: {
        fontSize: 22,
        color: colors.whatsAppGreen,
        borderRadius: 25
    },
    buttonText: {
        color: colors.whatsAppGreen,
        backgroundColor: "#e0fef2",
        paddingHorizontal: 25,
        paddingVertical: 6,
        borderRadius: 15,
        fontWeight: "700"
    }
})