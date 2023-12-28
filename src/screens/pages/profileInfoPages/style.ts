import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: colors.white,
        paddingBottom: 15,
        elevation:1
    },
    headerIconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    backIcon: {
        fontSize: 24,
        color: colors.red
    },
    ProfileImage: {
        width: 120,
        height: 120
    },
    profileContainer: {
        alignItems: "center"
    },
    profileName: {
        color: colors.red,
        fontSize: 23,
        marginTop: 8,
        marginBottom: 5,
    },
    profileNumber: {
        fontSize: 17,
    },
    listContainer: {
        marginTop: 5,
        paddingHorizontal:5
    },
    contentContainerStyle: {
        flexGrow: 1,
        justifyContent: "space-around",
        paddingHorizontal: 5
    }
})