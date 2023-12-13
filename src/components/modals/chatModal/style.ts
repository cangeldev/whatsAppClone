import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    innerContainer: {
        backgroundColor: colors.white,
        marginHorizontal: 70,
        marginTop: 130
    },
    image: {
        width: "100%",
        height: 260,
        resizeMode: "stretch"
    },
    divider: {
        borderBottomWidth: 0.2,
        borderBottomColor: "#dddddd"
    },
    name: {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        paddingHorizontal: 10,
        paddingVertical: 7,
        fontSize: 17,
        position: "absolute",
        width: "100%"
    },
    flatlist: {
        paddingVertical: 10
    },
    contentContainerStyle: {
        flexGrow: 1,
        justifyContent: "space-around"
    }
})