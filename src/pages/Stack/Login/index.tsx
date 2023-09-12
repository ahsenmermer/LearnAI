import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import colors from '../../../constants/colors';
import Button from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPasword] = useState<string>('');
  const navigation = useNavigation<any>();

  const onPress = () => {
    if (username.length != 0 && password.length != 0) {

        
      axios
        .get('http://10.0.2.2:8080/users/login', {
          params: {
            username: username,
            password: password,
          },
        })
        .then(res => {
          navigation.navigate('BottomNavBar', {id: res.data.id});
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
            console.log('adsjsad');
            
        })
    }
  };
  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../constants/assets/penguin.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Login</Text>
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
      <Button text="Login" onPress={onPress} containerStyle={styles.button} />
      <TouchableOpacity
        style={styles.registerContainer}
        onPress={navigateToRegister}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
