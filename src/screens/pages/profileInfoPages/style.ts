import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
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
        width: 100,
        height: 100
    },
    profileContainer: {
        alignItems: "center"
    },
    profileName: {
        color: colors.black,
        fontWeight: "500",
        fontSize: 17,
        marginVertical: 5
    }
})