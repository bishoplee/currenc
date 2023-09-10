import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './convertbutton.style'

const convertButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnConverter}>
        <Text>Convert</Text>
      </TouchableOpacity>
    </View>
  )
}

export default convertButton