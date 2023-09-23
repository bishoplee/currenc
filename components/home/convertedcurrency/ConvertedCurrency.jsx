import { useState } from 'react'
import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native'

import styles from './convertedCurrency.style'

const ConvertedCurrency = () => {
  const [convertedCurrency, setConvertedCurrency] = useState("NGN")
  const [defaultCurrency, setDefaultCurrency] = useState("Nigerian Naira")
  const [doingConversion, setDoingConversion] = useState(false)
  const [convertedValue, setConvertedValue] = useState("0.00")

  // fetch from BaseCurrency component
  const baseCurrency = "USD"
  // fetch from API
  const conversionRate = "901.00"

  return (
    <View style={styles.container}>
      {doingConversion ? (
        <View style={styles.bloop}></View>
      ) : (
        <View style={styles.currecyValueWrapper}>
          <Text style={styles.currencyValue}>{convertedValue}</Text>
          <Text style={styles.currencyShortName}>{convertedCurrency}</Text>
          <Text style={styles.conversionInfo}>{`1 ${baseCurrency} = ${convertedCurrency} ${conversionRate}`}</Text>
        </View>
      )}
      <>
        <TouchableOpacity style={styles.currencyNamePickerWrapper}>
          <Text style={styles.currencyName}>{defaultCurrency}</Text>
          <View style={styles.caret}></View>
        </TouchableOpacity>
      </>
    </View>
  )
}

export default ConvertedCurrency