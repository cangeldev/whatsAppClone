import colors from "assets/colors/colors"
import { StyleSheet,Dimensions } from "react-native"

const ICON_SIZE = 22
const BUTTON_RADIUS = 15
const BORDER_WIDTH = 0.8
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
    channelCardContainer: {
        paddingVertical: 15,
        borderWidth: BORDER_WIDTH,
        borderColor: colors.lightGray,
        borderRadius: BUTTON_RADIUS * 1.5,
        marginRight: 10,
        alignItems: "center",
        width:windowWidth*0.33
    },
    channelCardImage: {
        width: 60,
        height: 60
    },
    channelCardTitle: {
        color: colors.black,
        fontSize: 15,
        marginVertical: 10
    },
    iconContainer: {
        position: "absolute",
        right: 0,
        bottom: 0,
        padding: 2,
        backgroundColor: colors.white,
        borderRadius: ICON_SIZE * 1.5
    },
    channelCardIcon: {
        fontSize: ICON_SIZE,
        color: colors.whatsAppGreen,
        borderRadius: ICON_SIZE * 1.5
    },
    followButton: {
        color: colors.whatsAppGreen,
        backgroundColor: colors.lightGreen,
        paddingHorizontal: 25,
        paddingVertical: 6,
        borderRadius: BUTTON_RADIUS,
        fontWeight: "700"
    }
})
