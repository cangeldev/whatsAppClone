import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        backgroundColor: colors.white,
        marginHorizontal: 70,
        marginTop: 130
    },
    image: {
        width: "100%",
        height: 260,
        resizeMode: "stretch",
    },
    dividerLine: {
        borderBottomWidth: 0.2,
        borderBottomColor: "#dddddd"
    },
    nameContainer: {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        paddingHorizontal: 10,
        paddingVertical: 7,
        fontSize: 17,
        position: "absolute",
        width: "100%"
    },
    iconList: {
        paddingVertical: 10,
    },
    iconListContainer: {
        flexGrow: 1,
        justifyContent: "space-around"
    }
})
