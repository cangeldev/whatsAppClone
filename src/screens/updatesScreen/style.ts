import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    headerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 30,
        alignItems: "center"
    },
    headerViewText: {
        fontSize: 20,
        fontWeight: "600",
        color: colors.black
    },
    statusView: {
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    imageView: {
        alignSelf: "flex-start"
    },
    image: {
        width: 45,
        height: 45
    },
    imageIcon: {
        position: "absolute",
        fontSize: 20,
        color: colors.whatsAppGreen,
        right: -4,
        bottom: -4,
        backgroundColor: colors.white,
        borderRadius: 25
    },
    statusViewTitle: {
        marginHorizontal: 14,
        color: colors.black,
        fontWeight: "600",
        fontSize: 17
    },
    statusViewText: {
        marginHorizontal: 14,
        fontSize: 15
    },
    divider: {
        marginTop: 15,
        borderBottomWidth: 0.6,
        borderBottomColor: "#dddddd"
    },
    channelView:{
        marginHorizontal:20,
        marginVertical:10
    },
    buttonView: {
        position: "absolute",
        right: 18,
        bottom: 18
    }
})