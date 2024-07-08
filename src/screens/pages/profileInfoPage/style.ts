import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: colors.white,
        paddingBottom: 15,
        elevation: 1
    },
    headerIconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    backIcon: {
        fontSize: 24,
        color: colors.grey
    },
    ProfileImage: {
        width: 120,
        height: 120,
        borderRadius:100
    },
    profileContainer: {
        alignItems: "center"
    },
    profileName: {
        color: colors.black,
        fontSize: 23,
        marginVertical: 7
    },
    profileNumber: {
        fontSize: 17
    },
    contentContainerStyle: {
        flexGrow: 1,
        justifyContent: "space-around",
        paddingHorizontal: 5,
        marginTop: 5
    },
    statusText: {
        marginTop: 5,
        fontSize: 17,
        color: colors.black
    },
    statusDate: {
        fontSize: 15
    },
    settingsContainer: {
        marginTop: 10,
        backgroundColor: colors.white,
        padding: 10,
        elevation: 1
    }
})