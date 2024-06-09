import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function FontFile() {
  let [fontsLoaded] = useFonts({
    "Sora": require("../assest/font/Sora.ttf"),
  })
  if (!fontsLoaded) {
    return <AppLoading />;
  }
}
