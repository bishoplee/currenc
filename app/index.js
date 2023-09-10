import {
  View, ScrollView, SafeAreaView, Text, StatusBar 
} from 'react-native'
import { useState } from 'react'
import { Stack, useRouter,  } from 'expo-router'

import { COLORS, icons, images, SIZES } from '../constants'
import { BaseCurrency, ConvertedCurrency, ScreenHeaderBtn, LogoArea, ConvertButton } from '../components'

import styles from './index.theme'

const Home = () => {
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
            <LogoArea />
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