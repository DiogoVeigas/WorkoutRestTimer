import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StatusBar as NativeStatusBar } from "react-native";


import TopMenu from "../components/timer/TopMenu/index";
import TimeBox from "../components/timer/TimeBox/index";

import { useContext } from "react";
import { ColorSchemeContext } from "../storage/context/SchemeProvider";
import { getColorsByScheme } from "../styles/index";

export default function Timer() {

  const { colorScheme } = useContext(ColorSchemeContext);

  return (
    <SafeAreaView style={{ marginTop: NativeStatusBar.currentHeight, padding: 16, flex: 1, backgroundColor: getColorsByScheme(colorScheme).background }}>
      <TopMenu />
      <TimeBox />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}