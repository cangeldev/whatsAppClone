import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        justifyContent: "flex-end"
    },
    innerContainer: {
        backgroundColor: colors.white,
        paddingHorizontal: 25,
        paddingBottom: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    title: {
        color: colors.black,
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 20,
        marginTop: 10
    },
    iconMinus: {
        fontSize: 30,
        alignSelf: "center"
    }
});
