import { Text, Pressable } from 'react-native'
import React from 'react'
import styles from './style'

export default function Button({ text, onPress, containerStyle }: { text: string, onPress: () => void, containerStyle ?: any }) {
    return (
        <Pressable onPress={onPress} style={[styles.container, containerStyle]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}