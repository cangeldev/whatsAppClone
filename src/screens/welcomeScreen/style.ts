import colors from "assets/colors/colors"
import { StyleSheet, Dimensions } from "react-native"

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    image: {
        marginTop: 100,
        resizeMode: "contain",
        width: windowWidth,
        height: windowHeight / 5
    },
    title: {
        alignSelf: "center",
        color: colors.black,
        marginTop: 8,
        fontSize: 16
    },
    button: {
        backgroundColor: colors.whatsAppGreen,
        padding: 15,
        borderRadius: 30,
        position: "absolute",
        bottom: 12,
        right: 12
    },
    containerStyle: {
        alignItems: "flex-start",
        marginTop: 75,
        marginLeft: 15
    }
})