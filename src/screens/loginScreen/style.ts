import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        paddingVertical: 15
    },
    icon: {
        color: colors.grey,
        position: "absolute",
        right: 15,
        top: 20
    },
    headerTitle: {
        color: colors.black,
        fontWeight: "700",
        fontSize: 18
    },
    headerText: {
        color: colors.black,
        marginTop: 25
    },
    headerInfo: {
        color: colors.whatsAppGreen,
    },
    selectCountryView: {
        borderBottomWidth: 0.9,
        borderBottomColor: colors.whatsAppGreen,
        width: "65%",
        marginVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    selectCountry: {
        color: colors.black,
        fontSize: 17
    },
    downIcon: {
        position: "absolute",
        right: 0,
        color: colors.whatsAppGreen
    },
    numberView: {
        flexDirection: "row",
        width: "65%"
    },
    numberText: {
        borderBottomWidth: 0.9,
        borderBottomColor: colors.whatsAppGreen,
        marginRight: 10,
        paddingHorizontal: 3,
        textAlignVertical: "center",
        paddingRight: 10,
        fontSize: 15
    },
    innerText: {
        color: colors.black,
        fontSize: 16
    },
    numberInput: {
        fontSize: 16,
        borderBottomWidth: 1.6,
        borderBottomColor: colors.whatsAppGreen,
        flex: 1,
        paddingVertical: -5
    },
    info: {
        marginTop: 15,
        flex: 1
    }
})