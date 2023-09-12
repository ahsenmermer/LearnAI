import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:colors.white,
        padding:20,
        
    },
    title:{
        fontSize:18,
        fontWeight:"500",
        color:colors.black,
        alignItems:"center",
        marginVertical:10,
    },
    text:{
        color:colors.black,
        fontWeight:"400",
    },
    input:{
        borderWidth:1,
        borderRadius:8,          
        fontSize:16,
        paddingLeft:10,
        backgroundColor:colors.white,
        borderColor:colors.gray,
        marginVertical:10,
    },
    inputContainer:{
        marginTop:50,
    },
    informationTitle:{
        color:colors.black,
        fontSize:18,
        fontWeight:"600",
        marginBottom:10,
    },
    button:{
        width:"95%",
        marginVertical:20,
    }
    
});
export default styles;