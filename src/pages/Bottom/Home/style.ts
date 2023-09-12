import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/colors";

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.penguinBlue,
        padding: 20,
        paddingBottom: 50
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        resizeMode: "contain",
        borderWidth: 3,
        borderColor: colors.penguinPink,
        marginRight:10,
    },
    title: {
        fontWeight: "700"
    },
    imageContainer: {
        flexDirection: "row",
        alignItems:"center",
    },
    activitiesTitle:{
        color:colors.penguinPink,
        fontSize:22,
        fontWeight:"500",
        marginVertical:10,
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    leftTopContainer:{
      backgroundColor:colors.white,
      width: width*.37,
      height: height*.15,
      borderRadius:10,
      padding:20,
    },
    rightTopContainer:{
        backgroundColor:colors.white,
        width: width*.46,
        height: height*.25,
        borderRadius:10,
        padding:10,
    },
    leftBottomContainer:{
        backgroundColor:colors.white,
        width: width*.41,
        height: height*.25,
        borderRadius:10,
        marginTop:-1*height*.08,
        padding:10
    },
    rightBottomContainer:{
        backgroundColor:colors.white,
      width: width*.44,
      height: height*.15,
      borderRadius:10,
      marginTop:  height*.02,
      padding:20,
    },
    writingText:{
        position:"absolute",
        right:5,
        top:5,
        color:colors.gray,
        fontSize:12,
    },
    writingImage:{
        width:50,
        height:50,
        marginTop:-5,
        marginBottom:5,
    },
    writingTitle:{
        fontSize:16,
        fontWeight:"600",
        color:colors.penguinPink,
    },
    listeningText:{
        position:"absolute",
        right:5,
        top:5,
        color:colors.gray,
        fontSize:12,
    },
    listeningImage:{
        width:90,
        height:90,
        marginTop:10,
        
    },
    listeningTitle:{
        fontSize:16,
        fontWeight:"600",
        color:colors.penguinPink,
        width:"65%",
        marginTop:20,
    },
    readingText:{
        position:"absolute",
        right:5,
        top:5,
        color:colors.gray,
        fontSize:12,
    },
    readingImage:{
        width:80,
        height:80,
        marginTop:20,
    },
    readingTitle:{
        fontSize:16,
        fontWeight:"600",
        color:colors.penguinPink,
        width:"65%",
        marginTop:20,
    },
    gameText:{
        position:"absolute",
        right:5,
        top:5,
        color:colors.gray,
        fontSize:12,
    },
    gameImage:{
        width:50,
        height:50,
        marginTop:-5,
        marginBottom:5,
    },
    gameTitle:{
        fontSize:16,
        fontWeight:"600",
        color:colors.penguinPink,
        marginTop:6,
    },
    lastActivityTitle:{
        color:colors.penguinPink,
        fontSize:22,
        fontWeight:"500",
        marginVertical:10,
    },
    lastActivityContainer:{
        backgroundColor:colors.white,
        width:width*.90,
        borderRadius:10,
        padding:10,
    },
    firstMessageContainer:{
        flexDirection:"row",
        alignSelf:"flex-end",
        alignItems:"center",
    },
    myMessageTitle:{
        fontWeight:"600",
    },
    myMessagePp:{
        width: 30,
        height: 30,
        borderRadius: 15,
        resizeMode: "contain",
        borderWidth: 3,
        borderColor: colors.penguinPink,
        marginLeft:5,
    },
    firstMessageInContainer:{
        width:width*.8,
        backgroundColor:colors.lightPink,
        alignSelf:"flex-end",
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        padding:10,
    },
    myMessageText:{
        textAlign:"right",
    },
    time:{
        fontSize:12,
        position:"absolute",
        left:20,
        bottom:10,
        color:colors.black,
        fontWeight:"400"
    }
});

export default styles