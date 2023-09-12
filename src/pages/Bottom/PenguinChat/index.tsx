import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {Modal, Portal} from 'react-native-paper';
import colors from '../../../constants/colors';
import Button from '../../../components/Button';
import axios from 'axios';

export default function PenguinChat({route}: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [activites, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();

  useEffect(() => {
    //sayfa ilk açıldığında burası çalışır.
    if(isFocused == true){
      getData();
    }
  }, [isFocused]);

  const getData = () => {
    //route.params.id learnAI-navigatordan geliyor. id'yi loginden buraya taşıyoruz.
    //kullanıcı id'sine göre de istek atıyoruz.
    setLoading(true);
    axios
      .get(
        'http://10.0.2.2:8080/topics/gettopicsbyuserid?userId=' +
          route.params.id,
      )
      .then(response => {
        //gelen veriyi state'te kaydediyoruz. böylelikle ekranda gösterebileceğiz.
        setActivities(response?.data?.reverse());
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const navigateToChat = (item: any) => {
    navigation.navigate('Chat', {item: item, userId: route?.params?.id});
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const newActivityModal = () => {
    if (title.length != 0 && type.length != 0) {
      let params = {
        id: null,
        name: title,
        type: type,
      };
      axios
        .post(
          'http://10.0.2.2:8080/topics/addusertopic?userId=' + route.params.id,
          params,
        )
        .then(res => {
          console.log(res?.data);
          getData();
        })
        .catch(err => {
          console.log(err);
        });
      setModalVisible(false);
    }
  };

  const renderItem = ({item}: any) => {
    let image = require('../../../constants/assets/reading.png');
    if (item.type?.toLowerCase() == 'Reading'?.toLowerCase())
      image = require('../../../constants/assets/reading.png');
    else if (item.type?.toLowerCase() == 'Listening'?.toLowerCase())
      image = require('../../../constants/assets/listening.png');
    else if (item.type?.toLowerCase() == 'Writing'?.toLowerCase())
      image = require('../../../constants/assets/writing.png');
    return (
      <TouchableOpacity
        style={styles.activityContainer}
        onPress={() => navigateToChat(item)}>
        <Image source={image} style={styles.ımage} />
        <Text style={styles.activityTitle}>{item.name}</Text>
        <Text style={styles.timeText}>{item.messageCount} messages</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Portal>
        <Modal visible={modalVisible} onDismiss={hideModal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>new activity</Text>
            <TextInput
              value={title}
              onChangeText={setTitle}
              style={styles.input}
              placeholder="title..."
              placeholderTextColor={colors.penguinPink}
            />
            <TextInput
              value={type}
              onChangeText={setType}
              style={styles.input}
              placeholder="type..."
              placeholderTextColor={colors.penguinPink}
            />
            <Button
              text="Save"
              onPress={newActivityModal}
              containerStyle={styles.button}
            />
          </View>
        </Modal>
      </Portal>
      <Text style={styles.allActivitiesTitle}>all activites</Text>
      <Text style={styles.activityCountText}>{activites.length} result</Text>
      <FlatList
        data={activites}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={getData}/>}
      />
      <TouchableOpacity onPress={openModal} style={styles.newContainer}>
        <Text style={styles.newText}>new</Text>
      </TouchableOpacity>
    </View>
  );
}
