import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,

    },
    headerView: {
        paddingHorizontal: 16,
        paddingVertical: 22,
        flexDirection: "row"
    },
    linkIcon: {
        fontSize: 28,
        color: colors.white,
        padding: 10,
        backgroundColor: colors.whatsAppGreen,
        borderRadius: 25
    },
    headerViewTitle: {
        fontWeight: "600",
        color: colors.black,
        fontSize: 16,
        paddingLeft: 15
    },
    headerViewText: {
        paddingLeft: 15,
        fontWeight: "500"
    },
    headerInnerView: {
        justifyContent: "space-around"
    },
    divider: {
        marginVertical: 15,
        borderBottomWidth: 0.2,
        borderBottomColor: "#dddddd"
    },
    infoView: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 50
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
    },
    title: {
       marginLeft:20,
       color:colors.black,
       fontWeight:"600",
       fontSize:17
    },
    callListView: {

    }

})