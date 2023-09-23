import {
  View, ScrollView, SafeAreaView, Text, StatusBar 
} from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import { Stack, useRouter,  } from 'expo-router'

import { COLORS, icons, images, SIZES } from '../constants'
import { BaseCurrency, ConvertedCurrency, ScreenHeaderBtn, LogoArea, ConvertButton } from '../components'

import styles from './index.theme'

import useFetch from '../hook/useFetch'

const getCurrentDate = (today) => {
  const date = new Date(today)
  const options = { year: "numeric", month: "long", day: "numeric" }
  const formattedDate = date.toLocaleDateString("en-US", options)

  return formattedDate
}

const Home = () => {
  const [symbols, setSymbols] = useState("")

  const listSymbols = () => {
    const { data, isLoading, error } = useFetch(
      'symbols',
      {}
    )

    // Initialize an empty object to store the new structure
    const newObject = [];

    // Sort the currencies alphabetically by their full names
    const sortedCurrencies = Object.entries(data.symbols).sort((a, b) => a[1].localeCompare(b[1]));

    // Initialize variables to track the current alphabet and its corresponding currencies
    let currentAlphabet = "";
    let currentCurrencies = [];

    sortedCurrencies.forEach(([symbol, name]) => {
      const firstLetter = name[0].toUpperCase();

      if (firstLetter !== currentAlphabet) {
        // A new alphabet group is encountered
        if (currentCurrencies.length > 0) {
          newObject.push({ alphabet: currentAlphabet, currencies: currentCurrencies });
        }
        currentAlphabet = firstLetter;
        currentCurrencies = [{ name, symbol }];
      } else {
        // Continue adding currencies to the current group
        currentCurrencies.push({ name, symbol });
      }
    });

    // Append the last alphabet group
    if (currentCurrencies.length > 0) {
      newObject.push({ alphabet: currentAlphabet, currencies: currentCurrencies });
    }

    console.log(62, newObject)
  }

  useCallback(() => {
    listSymbols()
  }, [])

  const router = useRouter()

  const refreshRates = () => {
    //
    console.log("I will handle refresh.")
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.secondary },
          headerShadowVisible: false,
          headerLeft: () => (
            // <LogoArea today={getCurrentDate(data.date)} />
            <LogoArea today={""} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.refresh} handlePress={refreshRates} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />

      <View style={styles.wrapper}>
        {/* <ScreenHeader /> */}
        <StatusBar
          barStyle={'light-content'}
        />

        <BaseCurrency
          handleClick={() => {}}
        />

        <ConvertedCurrency
          handleClick={() => {}}
        />
      </View>

      <ConvertButton />

    </SafeAreaView>
  )
}

export default Home