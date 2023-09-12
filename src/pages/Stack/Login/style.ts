import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/colors";

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.penguinBlue,
        alignItems: 'center',
    },
    image: {
        width: width * .65,
        height: height * .2,
        marginTop: 40
    },
    title:{
        fontSize: 35,
        color: colors.penguinPink,
        marginBottom: 48,
        fontWeight: '500'
    },
    input: {
        backgroundColor: colors.white,
        width: '80%',
        height: 60,
        borderRadius: 5,
        marginVertical: 5,
        fontSize: 16,
        paddingLeft: 20
    },
    button:{
        width: '30%',
        marginTop: 48,
        borderRadius: 100
    },
    registerText:{
        color:colors.penguinPink,
        fontSize:16,
        fontWeight:"700",
    },
    registerContainer:{
        position:"absolute",
        bottom:50,
    }
});

export default styles