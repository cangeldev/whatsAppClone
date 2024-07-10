import colors from "assets/colors/colors"
import { StyleSheet, ViewStyle, TextStyle } from "react-native"

const commonContainer: ViewStyle = {
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    elevation: 1.3,
    paddingVertical: 8,
    paddingLeft: 8
}

const commonIcon: TextStyle = {
    fontSize: 35,
    position: "absolute",
    top: -3
}

export default StyleSheet.create({
    baseContainer: {
        ...commonContainer
    } as ViewStyle,
    
    toContainer: {
        ...commonContainer,
        backgroundColor: colors.white,
        alignSelf: "flex-start",
        paddingRight: 37,
        marginRight: 30
    } as ViewStyle,

    fromContainer: {
        ...commonContainer,
        backgroundColor: "#e7ffdb",
        alignSelf: "flex-end",
        paddingRight: 50,
        marginLeft: 30
    } as ViewStyle,

    baseIcon: {
        ...commonIcon
    } as TextStyle,

    toIcon: {
        ...commonIcon,
        left: -8,
        transform: [{ scaleX: -1 }, { rotate: "270deg" }],
        color: colors.white
    } as TextStyle,

    fromIcon: {
        ...commonIcon,
        right: -8,
        transform: [{ scaleX: 1 }, { rotate: "270deg" }],
        color: "#e7ffdb"
    } as TextStyle,

    message: {
        color: "black",
        fontSize: 14.5
    } as TextStyle,

    messageInfo: {
        fontSize: 10,
        position: "absolute",
        right: 7,
        bottom: 5
    } as TextStyle
})
