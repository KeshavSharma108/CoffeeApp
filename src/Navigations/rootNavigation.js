import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { CartScreen, DetailedScreen, FirstScreen, HomeScreen } from "../Screen";
import config from "../config";

const Stack = createNativeStackNavigator();

export default function rootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={config.routes.FIRST} component={FirstScreen} />
        <Stack.Screen name={config.routes.HOME} component={HomeScreen} />
        <Stack.Screen name={config.routes.DETAILS} component={DetailedScreen} />
        <Stack.Screen name={config.routes.CART} component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
