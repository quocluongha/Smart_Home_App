import { React, useState } from 'react';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';

import fetchFonts from './utils/fetchFonts';
import TestScreen from './screens/TestScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RoomScreen from './screens/RoomScreen';
import LightScreen from './screens/LightScreen';
import DoorScreen from './screens/DoorScreen';
import FanScreen from './screens/FanScreen';

const useFonts = async () => {
  await fetchFonts()
}

export default function App() {

  //! Load data
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  //* Load font
  if (!isDataLoaded) {
    return (
      <AppLoading
        startAsync={useFonts}
        onFinish={() => setIsDataLoaded(true)}
        onError={(error) => console.log(error)}
      />
    )
  }
  //! Done load data

  return (
    <FanScreen/>
  );
}

const styles = StyleSheet.create({

});