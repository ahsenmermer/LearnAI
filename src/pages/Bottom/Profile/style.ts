import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.penguinBlue,
    padding: 20,
  },
  circleContainer: {
    width: width * 1.3,
    height: width * 1.3,
    borderRadius: (width * 1.3) / 2,
    backgroundColor: colors.penguinPink,
    marginTop: -width * 0.5,
    marginLeft: -width * 0.28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ppImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 18,
  },
  pencilImage: {
    width: 30,
    height: 30,
  },
  pencilContainer: {
    width: 35,
    height: 35,
    backgroundColor: colors.penguinBlue,
    borderRadius: 50,
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 3,
  },
  userCode: {
    color: colors.white,
    fontWeight: '400',
    fontSize: 12,
  },
  profileContainer: {
    marginTop: 150,
    marginLeft: 35,
    alignItems: 'center',
  },
  settingsContainer: {
    marginLeft: 20,
    marginTop: 50,
  },
  settingItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: colors.white,
    marginVertical: 7,
    width: width * 0.77,
  },
  settingItemImage: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  settingItemText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
  modalContainer: {
    backgroundColor: colors.white,
    width: width * 0.8,
    height: height * 0.35,
    alignSelf: 'center',
    borderRadius: 14,
    padding: 20,
  },
  language: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    padding: 10,
  },
  languageText: {
    fontSize: 16,
    fontWeight: '500',
  },
  languageTitle: {
    marginBottom: 20,
    color: 'gray',
  },
});

export default styles;
