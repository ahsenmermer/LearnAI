import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

export default function Home({route}: any) {
  const [activities, setActivities] = useState<any[]>([]);
  const [images, setImages] = useState<any[]>();
  const [lastActivity, setLastActivity] = useState<any>();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<any>();

  useEffect(() => {
    getLastActivityMessage();
    getRandomActivities();
  }, []);

  const onRefresh = () => {
    getLastActivityMessage();
    getRandomActivities();
  }

  const getRandomActivities = () => {
    console.log(route?.params, 'dsads');
    
    axios
      .get(
        'http://10.0.2.2:8080/topics/getrndfourtopic?userId=' + route.params.id,
      )
      .then(res => {
        console.log(res?.data,'data');
        
        setActivities(res?.data);
        let arr: any[] = [];
        res?.data?.map((data: any) => {
          if (data?.type?.toLowerCase() == 'writing') {
            arr.push(require('../../../constants/assets/writing.png'));
          } else if (data?.type?.toLowerCase() == 'reading') {
            arr.push(require('../../../constants/assets/reading.png'));
          } else {
            arr.push(require('../../../constants/assets/listening.png'));
          }
        });
        setImages(arr);
      })
      .catch(err => {
        console.log(err, 'err');
      });
  };

  const getLastActivityMessage = () => {
    //route.params.id learnAI-navigatordan geliyor. id'yi loginden buraya taşıyoruz.
    //kullanıcı id'sine göre de istek atıyoruz.
    setLoading(true);
    axios
      .get(
        'http://10.0.2.2:8080/topics/gettopicsbyuserid?userId=' +
          route.params.id,
      )
      .then(response => {
        const lastIndex = response?.data?.length - 1;
        axios
          .get(
            'http://10.0.2.2:8080/messages/getmessagesbytopicid?topicId=' +
              response?.data?.[lastIndex]?.id,
          )
          .then(res => {
            const lastIndex = res?.data?.length - 1;
            setLastActivity(res?.data?.[lastIndex]);
          })
          .catch(err => {
            console.log(err, 'err-1');
          });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const navigateToMessages = (index: number, name: string, type: string) => {
    let activty = {
      name: name,
      type: type,
    };

    axios
      .post(
        'http://10.0.2.2:8080/topics/addusertopic?userId=' + route.params.id,
        activty,
      )
      .then(res => {
        console.log(res?.data);

        navigation.navigate('PenguinChat');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={onRefresh}
        />
      }>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../constants/assets/pp.jpeg')}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>Hi, ahsenmermer 👋</Text>
          <Text style={styles.title}>
            Discover, Learn,Connect,Explore,Engage
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.activitiesTitle}>activities</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.leftTopContainer}
            onPress={() =>
              navigateToMessages(
                0,
                activities?.[0]?.name,
                activities?.[0]?.type,
              )
            }>
            <Text style={styles.writingText}>#{activities?.[0]?.type}</Text>
            <Image source={images?.[0]} style={styles.writingImage} />
            <Text numberOfLines={2} style={styles.writingTitle}>
              {activities?.[0]?.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rightTopContainer}
            onPress={() =>
              navigateToMessages(
                1,
                activities?.[1]?.name,
                activities?.[1]?.type,
              )
            }>
            <Text style={styles.listeningText}>#{activities?.[1]?.type}</Text>
            <Image source={images?.[1]} style={styles.listeningImage} />
            <Text numberOfLines={3} style={styles.listeningTitle}>
              {activities?.[1]?.name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.leftBottomContainer}
            onPress={() =>
              navigateToMessages(
                2,
                activities?.[2]?.name,
                activities?.[2]?.type,
              )
            }>
            <Text style={styles.readingText}>#{activities?.[2]?.type}</Text>
            <Image source={images?.[2]} style={styles.readingImage} />
            <Text numberOfLines={3} style={styles.readingTitle}>
              {activities?.[2]?.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rightBottomContainer}
            onPress={() =>
              navigateToMessages(
                3,
                activities?.[3]?.name,
                activities?.[3]?.type,
              )
            }>
            <Text style={styles.gameText}>#{activities?.[3]?.type}</Text>
            <Image source={images?.[3]} style={styles.gameImage} />
            <Text numberOfLines={2} style={styles.gameTitle}>
              {activities?.[3]?.name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: 300}}>
        <Text style={styles.lastActivityTitle}>last activity</Text>
        <View style={styles.lastActivityContainer}>
          <View style={styles.firstMessageContainer}>
            <Text style={styles.myMessageTitle}>
              {lastActivity?.userId != 0 ? 'you' : 'penguin'}
            </Text>
            <Image
              source={
                lastActivity?.userId != 0
                  ? require('../../../constants/assets/pp.jpeg')
                  : require('../../../constants/assets/penguin.png')
              }
              style={styles.myMessagePp}
            />
          </View>
          <View style={styles.firstMessageInContainer}>
            <Text style={styles.myMessageText}>{lastActivity?.message}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
