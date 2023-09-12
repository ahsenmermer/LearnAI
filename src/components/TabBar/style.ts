import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';


const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: height * 0.07,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: '#ddd',
    shadowColor: '#aaa',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  tabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  midTabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    top: (height * -0.04) / 2.5,
    backgroundColor: colors.penguinPink,
    borderRadius: (width * width) / 2,
    width: width * 0.17,
    height: width * 0.17,
    elevation: 10,
    shadowColor: colors.penguinPink,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    marginBottom: '5%',
  },
});

export default styles;
