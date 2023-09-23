import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'

import styles from './screenheader.style'
import { images } from '../../../constants'

const LogoArea = ({ today }) => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logoImage}
        source={images.logo}
      />
      <View>
        <Text style={styles.logoText}>CurrencyC</Text>
        <Text style={styles.rateDate}>Rates of: {today}</Text>
      </View>
    </View>
  )
}

export default LogoArea