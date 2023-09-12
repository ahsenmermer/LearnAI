import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import {TextInput} from 'react-native-paper';
import colors from '../../../constants/colors';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

export default function ContactUs() {
    const navigation = useNavigation();
    const navigateToBack =() => {
        navigation.goBack() 
    }

  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Who is Learn AI</Text>
      <Text style={styles.text}>
        LearnAI is a leading provider of innovative educational solutions for AI
        and machine learning. Our team of experienced developers, educators, and
        designers are passionate about leveraging the power of technology to
        help learners of all ages and backgrounds acquire essential skills for
        success in the digital age. Contact us today to learn more about our
        cutting-edge learning platform and how we can help you achieve your
        goals!
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.informationTitle}>your informations</Text>
        <TextInput
          style={styles.input}
          placeholder="first name"
          placeholderTextColor={colors.black}
        />
        <TextInput
          style={styles.input}
          placeholder="last name"
          placeholderTextColor={colors.black}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor={colors.black}
        />
        <TextInput
          style={styles.input}
          placeholder="Company Name"
          placeholderTextColor={colors.black}
        />
        <Button text='Save' onPress={navigateToBack} containerStyle={styles.button}/>
      </View>
    </View>
  );
}
