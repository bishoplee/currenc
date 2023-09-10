import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'

import styles from './screenheader.style'
import { images } from '../../../constants'

const LogoArea = () => {
  const getCurrentDate=()=>{
 
    var date = new Date().getDate();
    var month = new Date().toLocaleString('default', { month: 'long' })
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return `${month} ${date}, ${year}`
  }

  const [today, setToday] = useState(getCurrentDate())

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