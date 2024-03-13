import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignItems: "center",
        marginRight:35
    },
    icon: {
        fontSize: 20,
        color: colors.whatsAppGreen,
    },
    iconView: {
        padding: 15,
        backgroundColor: colors.white,
        borderWidth: 1.5,
        borderColor:"#e9e9e9",
        borderRadius: 50,
        marginBottom:10
    }
})