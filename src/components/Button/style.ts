import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 40,
        alignSelf: 'center',
        backgroundColor: colors.penguinPink,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,

    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '600'
    }
});

export default styles