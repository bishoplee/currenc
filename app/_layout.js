import { SplashScreen, Stack } from 'expo-router'
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as Splash from 'expo-splash-screen'

Splash.preventAutoHideAsync()

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    EncodeSansRegular: require('../assets/fonts/EncodeSansCondensed-Regular.ttf'),
    EncodeSansLight: require('../assets/fonts/EncodeSansCondensed-Light.ttf'),
    EncodeSansExtraLight: require('../assets/fonts/EncodeSansCondensed-ExtraLight.ttf'),
    SourceSansRegular: require('../assets/fonts/SourceSansPro-Regular.ttf'),
    SourceSansLight: require('../assets/fonts/SourceSansPro-Light.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await Splash.hideAsync()
    }
  }, [fontsLoaded])

  if(!fontsLoaded) return null

  return <Stack onLayout={onLayoutRootView} />;
}

export default Layout