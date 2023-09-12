import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {Modal, Portal} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGES = [
  {
    id: 1,
    name: 'English',
    shortName: 'en',
  },
  {
    id: 2,
    name: 'Türkçe',
    shortName: 'tr',
  },
  {
    id: 3,
    name: 'Français',
    shortName: 'fr',
  },
  {
    id: 4,
    name: 'Русский',
    shortName: 'ru',
  },
];
export default function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<any>();
  const Logout = () => {
    navigation.navigate('Login');
  };
  const onPressContactUs = () => {
    navigation.navigate('ContactUs');
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const storeData = async (language:any) => {
    try {
  
      await AsyncStorage.setItem('language', JSON.stringify(language));
      setModalVisible(false)
    } catch (e) {
      // saving error
      console.log(e);
      
    }
  }

  const renderLanguage = ({item}: any) => {
    return (
      <TouchableOpacity style= {styles.language} onPress={() => storeData(item)}>
        <Text style= {styles.languageText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Portal>
        <Modal visible={modalVisible} onDismiss={hideModal}>
          <View style={styles.modalContainer}>
            <Text style= {styles.languageTitle}>Please select a language for ChatGPT answer</Text>
            <FlatList data={LANGUAGES} renderItem={renderLanguage} />
          </View>
        </Modal>
      </Portal>
      <View style={styles.circleContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../../constants/assets/pp.jpeg')}
            style={styles.ppImage}
          />
          <View style={styles.pencilContainer}>
            <Image
              source={require('../../../constants/assets/pencil.png')}
              style={styles.pencilImage}
            />
          </View>
          <Text style={styles.username}>ahsenmermer</Text>
          <Text style={styles.userCode}>#18811938</Text>
        </View>
      </View>
      <View style={styles.settingsContainer}>
        <TouchableOpacity
          style={styles.settingItemContainer}
          onPress={onPressContactUs}>
          <Image
            source={require('../../../constants/assets/contact.png')}
            style={styles.settingItemImage}
          />
          <Text style={styles.settingItemText}>Contact Us</Text>
        </TouchableOpacity>
        <View style={styles.settingItemContainer}>
          <Image
            source={require('../../../constants/assets/user.png')}
            style={styles.settingItemImage}
          />
          <Text style={styles.settingItemText}>Privacy & Policy</Text>
        </View>
        <TouchableOpacity
          style={styles.settingItemContainer}
          onPress={openModal}>
          <Image
            source={require('../../../constants/assets/language.png')}
            style={styles.settingItemImage}
          />
          <Text style={styles.settingItemText}>Change Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItemContainer} onPress={Logout}>
          <Image
            source={require('../../../constants/assets/logout.png')}
            style={styles.settingItemImage}
          />
          <Text style={styles.settingItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
