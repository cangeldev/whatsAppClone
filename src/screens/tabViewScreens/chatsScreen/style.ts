import colors from "assets/colors/colors"
import { StyleSheet, Dimensions } from "react-native"

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: windowWidth * 0.04
    },
    text: {
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 12,
        color: colors.grey
    },
    divider: {
        marginVertical: 15,
        borderBottomWidth: 0.2,
        borderBottomColor: "#dddddd"
    },
    infoView: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        fontSize: 12,
        marginRight: 6
    },
    infoText: {
        fontSize: 12
    },
    innerInfoText: {
        color: colors.whatsAppGreen
    },
    buttonView: {
        position: "absolute",
        right: 18,
        bottom: 18
    }
})