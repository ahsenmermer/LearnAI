import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useInsertionEffect, useState} from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import colors from '../../../constants/colors';
import axios from 'axios';
import Tts from 'react-native-tts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Chat(props: any) {
  const {item: _item, userId} = props.route.params;
  const [messages, setMessages] = useState<any[]>([]);
  const [message, setMessage] = useState<string>('');
  const [language, setLanguage] = useState<any>();
  const navigation = useNavigation();

  const [ttsStatus, setTtsStatus] = useState<any>('initiliazing');

  useEffect(() => {
    getMessages();
    getLanguage();
  }, []);

  const getLanguage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('language');
      console.log(jsonValue);
      setLanguage(
        jsonValue != null
          ? JSON.parse(jsonValue)
          : {
              id: 1,
              name: 'Engilish',
              shortName: 'en',
            },
      );
      //TTS kütüphanesinin dilini ayarlama yaptığımız ve listenerları tanımladığımız yer
      Tts.addEventListener('tts-start', _event => setTtsStatus('started'));
      Tts.addEventListener('tts-finish', _event => setTtsStatus('finished'));
      Tts.addEventListener('tts-cancel', _event => setTtsStatus('cancelled'));
      Tts.getInitStatus().then(() =>
      //dili ayarladığımız yer
        initTts(
          jsonValue != null
            ? JSON.parse(jsonValue)
            : {
                id: 1,
                name: 'Engilish',
                shortName: 'en',
              },
        ),
      );
      return () => {
        Tts.removeEventListener('tts-start', _event => setTtsStatus('started'));
        Tts.removeEventListener('tts-finish', _event =>
          setTtsStatus('finished'),
        );
        Tts.removeEventListener('tts-cancel', _event =>
          setTtsStatus('cancelled'),
        );
      };
    } catch (e) {
      console.log(e);
    }
  };

  const initTts = async (language: any) => {
    const voices = await Tts.voices();

    let selectedVoice = null;
    if (voices && voices?.length > 0) {
      //Seçili olan dilini seslerin içinde buluyoruz
      const lang = voices?.find(x => x?.language.includes(language.shortName));
      console.log('Bulunan: ->',lang, 'local language ->', language);

      //Seçili olan yoksa ilk gelen sesi kullanıcaz varsa kendisini kulanıcaz
      selectedVoice = lang?.id ?? voices[0].id;
      try {
        //Seçili olan yoksa ilk gelen sesi kullanıcaz  varsa kendisini kulanıcaz
        await Tts.setDefaultLanguage(lang?.language ?? voices[0].language);
      } catch (err) {
        //Samsung S9 has always this error:
        //"Language is not supported"
        console.log(`setDefaultLanguage error `, err);
      }
      //Seçili olan yoksa ilk gelen sesi kullanıcaz  varsa kendisini kulanıcaz
      await Tts.setDefaultVoice(lang?.id ?? voices[0].id);

      setTtsStatus('initialized');
    } else {
      setTtsStatus('initialized');
    }
  };

  const readText = async (message: string) => {
    Tts.stop();
    Tts.speak(message);
  };

  const getMessages = () => {
    axios
      .get(
        'http://10.0.2.2:8080/messages/getmessagesbytopicid?topicId=' +
          _item?.id,
      )
      .then(res => {
        setMessages(res?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const sendChatGPTMessage = () => {
    const params = {
      prompt:
        'bu mesaja vereceğin yanıt ' +
        language.name +
        ' olsun ve 50 tokenlık olsun. Mesaj: ' +
        message,
      model: 'text-davinci-003',
      max_tokens: 50,
      temperature: 0,
    };

    axios
      .post('https://api.openai.com/v1/completions', params, {
        headers: {
          Authorization:
            'Bearer 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',
        },
      })
      .then(result => {
        sendMessage(result.data.choices[0].text?.trim(), 0);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const sendMessage = (_message = message, _userId = userId) => {
    let sendingMessage = {
      userId: _userId,
      message: _message,
    };
    axios
      .post(
        'http://10.0.2.2:8080/messages?topicId=' + _item?.id,
        sendingMessage,
      )
      .then(() => {
        getMessages();
        setMessage('');
        if (_userId != 0) {
          sendChatGPTMessage();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const navigateToBack = () => {
    navigation.goBack();
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <View>
        {item?.userId === 0 ? (
          <View>
            <View style={styles.penguinContainer}>
              <Image
                source={require('../../../constants/assets/penguin.png')}
                style={styles.penguinPhoto}
              />
              <Text style={styles.meTitle}>penguin</Text>
            </View>

            <View style={styles.penguinMessageContainer}>
              <Text style={styles.penguinMessage}>{item?.message}</Text>
              {_item?.type?.toLowerCase() === 'listening'?.toLowerCase() && (
                <TouchableOpacity
                  onPress={() => {
                    if (ttsStatus != 'started') {
                      readText(item?.message);
                    }
                  }}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: 16,
                      fontWeight: '500',
                    }}>
                    {ttsStatus == 'started' ? 'Ses Oynatılıyor' : 'Sesi Dinle'}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.meContainer}>
              <Text style={styles.meTitle}>you</Text>
              <Image
                source={require('../../../constants/assets/pp.jpeg')}
                style={styles.myPhoto}
              />
            </View>

            <View style={styles.meMessageContainer}>
              <Text style={styles.myMessage}>{item?.message}</Text>
            </View>
          </View>
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.inContainer}>
        <TouchableOpacity style={styles.header} onPress={navigateToBack}>
          <Image
            source={require('../../../constants/assets/back.png')}
            style={styles.backImage}
          />
          <Text style={styles.chatTitle}>{_item?.name}</Text>
        </TouchableOpacity>

        <View style={{height: '77%'}}>
          <FlatList
            data={messages}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.inpuContainer}>
          <TextInput
            style={styles.input}
            placeholder="write anything you want..."
            placeholderTextColor={colors.penguinPink}
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <TouchableOpacity
            style={styles.sendImageContainer}
            onPress={() => sendMessage()}>
            <Image
              source={require('../../../constants/assets/send.png')}
              style={styles.sendImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
