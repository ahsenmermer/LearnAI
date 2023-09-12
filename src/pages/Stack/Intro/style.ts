import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.penguinBlue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: width * .9,
        height: height * .3,
    },
    title: {
        color:colors.penguinPink,
        fontSize: 30,
        fontWeight: '500'
    },
    description: {
        color: colors.penguinPink,
        fontSize: 16,
        fontWeight: '400',
        width: '75%',
        textAlign: 'center',
        marginTop: 10,
    }
});

export default styles