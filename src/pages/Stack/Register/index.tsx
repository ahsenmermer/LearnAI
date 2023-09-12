import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import colors from '../../../constants/colors';
import Button from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState<string>('');
  const [password, setPasword] = useState<string>('');
  const navigation = useNavigation<any>();

  const onPress = () => {
    const data: any = {
      username: username,
      password: password,
    };
    if (username.length != 0 && password.length != 0) {
      axios
        .post('http://10.0.2.2:8080/users', data)
        .then(response => {
          navigation.goBack();
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../constants/assets/penguin.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Register</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        placeholder="username"
        placeholderTextColor={colors.penguinPink}
      />
      <TextInput
        value={password}
        onChangeText={setPasword}
        style={styles.input}
        placeholder="password"
        placeholderTextColor={colors.penguinPink}
      />
      <TextInput
        style={styles.input}
        placeholder="birthday"
        placeholderTextColor={colors.penguinPink}
      />
      <Button
        text="Register"
        onPress={onPress}
        containerStyle={styles.button}
      />
    </View>
  );
}
