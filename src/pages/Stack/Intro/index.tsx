import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

export default function Intro() {
    const navigation = useNavigation<any>()

    const onPress = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../constants/assets/penguin.png')} style={styles.image} />
            <Text style={styles.title}>Learn AI</Text>
            <Text style={styles.description}>learn languages with our COOL penguin friends</Text>
            <Button text='GET STARTED' onPress={onPress} containerStyle={{
                position: 'absolute',
                bottom: 20,
            }} />
        </View>
    )
}