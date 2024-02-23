import React, { useState, useEffect } from 'react';
import Navigator from './src/navigation/main';
import { SchemeProvider } from './src/storage/context/SchemeProvider';
import { LanguageProvider } from './src/storage/context/LanguageProvider';

import LoadFonts from './src/services/fontConfig';
import { useKeepAwake } from 'expo-keep-awake';

import * as SplashScreen from 'expo-splash-screen';
import { logCurrentStorage, clearStorage } from './src/storage/asyncStorage/currentStorage';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  
  let fontsLoaded = LoadFonts();
  useKeepAwake();

  useEffect(() => {
    const getAsyncStorage = async () => {
      try {
        const storageData = await logCurrentStorage();
        //console.log("CURRENT STORAGE: ", storageData);
        setAppIsReady(storageData != null && fontsLoaded);
      } catch (error) {
        console.error("Error retrieving storage data: ", error);
      }
    };

    getAsyncStorage();
  }, [fontsLoaded]);


  useEffect(() => {
    const hideSplashScreen = async () => {
      if (appIsReady && fontsLoaded) {
        try {
          await SplashScreen.hideAsync();
        } catch (e) {
          console.error("Error hiding splash screen: ", e);
        }
      }
    };

    hideSplashScreen();
  }, [appIsReady]);

  return (
    <SchemeProvider>
      <LanguageProvider>
        {appIsReady ? <Navigator /> : <></>}
      </LanguageProvider>
    </SchemeProvider>
  );
}
