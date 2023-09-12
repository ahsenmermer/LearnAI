import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.penguinBlue,
        flex:1,
        padding:20,
    },
    inContainer:{
        flex:1,
        backgroundColor:colors.white,
        borderRadius:5,
        padding:10,
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        marginVertical:10,
    },
    backImage:{
         width:35,
         height:35,
         marginRight:50,
    },
    chatTitle:{
        color:colors.penguinPink,
        fontSize:18,
        fontWeight:"700",
    },
    meContainer:{
        flexDirection:"row",
        alignSelf:"flex-end",
        alignItems:"center"
    },
    meTitle:{
        fontWeight:"500"
    },
    myPhoto:{
        width:40,
        height:40,
        borderRadius:20,
        marginLeft:10,
        borderWidth:2,
        borderColor:colors.penguinPink,
    },
    meMessageContainer:{
        width:width*.80,
        padding:20,
        backgroundColor:colors.lightPink,
        alignSelf:"flex-end",
        marginVertical:10,
        borderBottomLeftRadius:100,
        borderTopLeftRadius:100,
        borderBottomRightRadius:20,
    },
    myMessage:{
        color:colors.black,
        textAlign:"right"
    },
    time:{
        fontSize:12,
        position:"absolute",
        left:30,
        bottom:10,
        color:colors.black,
        fontWeight:"400"
    },
    penguinContainer:{
        flexDirection:"row",
        alignSelf:"flex-start",
        alignItems:"center"
    },
    penguinMessageContainer:{
        width:width*.80,
        padding:10,
        backgroundColor:colors.penguinBlue,
        alignSelf:"flex-start",
        marginVertical:10,
        borderBottomLeftRadius:20,
        borderTopRightRadius:100,
        borderBottomRightRadius:100,
    },
    penguinMessage:{
        color:colors.black,
    },
    penguinTime:{
        fontSize:12,
        position:"absolute",
        right:30,
        bottom:10,
        color:colors.black,
        fontWeight:"400"
    },
     penguinPhoto:{
        width:40,
        height:40,
        borderRadius:20,
        marginRight:10,
        backgroundColor:colors.penguinBlue,
    },
    input:{
        borderWidth:1,
        borderRadius:5,          
        fontSize:16,
        paddingLeft:10,
        width: '90%'
    },
    inpuContainer:{
        position:"absolute",
        bottom:10,
        width:width*.85,
        alignSelf:"center",
        justifyContent:"center"
    },
    sendImage:{
        width:40,
        height:40,
    },
    sendImageContainer:{
        width:40,
        height:40,
        position:"absolute",
        right:10,
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
      },
      buttonStyle: {
        justifyContent: 'center',
        marginTop: 15,
        padding: 10,
        backgroundColor: '#8ad24e',
      },
});
export default styles;