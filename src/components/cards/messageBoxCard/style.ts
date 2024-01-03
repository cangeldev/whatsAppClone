import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    baseContainer: {
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        elevation: 1.3,
        paddingVertical: 8,
        paddingLeft: 8
    },
    toContainer: {
        backgroundColor: colors.white,
        alignSelf: "flex-start",
        paddingRight: 37,
        marginRight: 30
    },
    fromContainer: {
        backgroundColor: "#e7ffdb",
        alignSelf: "flex-end",
        paddingRight: 50,
        marginLeft: 30
    },
    baseIcon: {
        fontSize: 35,
        position: "absolute",
        top: -3
    },
    toIcon: {
        left: -8,
        transform: [{ scaleX: -1 }, { rotate: "270deg" }],
        color: colors.white
    },
    fromIcon: {
        right: -8,
        transform: [{ scaleX: 1 }, { rotate: "270deg" }],
        color: "#e7ffdb"
    },
    message: {
        color: "black",
        fontSize: 14.5
    },
    messageInfo: {
        fontSize: 10,
        position: "absolute",
        right: 7,
        bottom: 5
    }
})
