import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../constants/colors';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.penguinBlue,
    padding: 20,
  },
  allActivitiesTitle: {
    color: colors.penguinPink,
    fontSize: 22,
  },
  activityCountText: {
    color: colors.white,
  },
  activityContainer: {
    backgroundColor: colors.white,
    width: width * 0.9,
    height: 75,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ımage: {
    width: width * 0.1,
    height: 40,
    marginHorizontal: 20,
  },
  activityTitle: {
    color: colors.penguinPink,
    fontSize: 22,
    fontWeight: '300',
  },
  timeText: {
    color: colors.gray,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  newContainer: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: colors.penguinPink,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  newText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '400',
  },
  modalContainer: {
    backgroundColor: colors.white,
    width: width * 0.65,
    height: height * 0.35,
    alignSelf: 'center',
    borderRadius:14,
    padding:20,
  },
  modalTitle:{
    color:colors.penguinPink,
    fontSize:18,
    marginBottom:30,
    borderBottomWidth:.5,
    borderBottomColor:colors.gray,
    width:"50%",
    paddingBottom:4,
  },
  input:{
    borderWidth:1,
    borderRadius:5,          
    fontSize:16,
    paddingLeft:10,
    marginVertical:10,
},
button:{
    width: '90%',
    borderRadius: 10,
    marginTop:10,
},
});

export default styles;
