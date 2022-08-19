import React, { useEffect } from "react";

import { SafeAreaView, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { isReadyRef, navigationRef } from "./navigationService";

import Profile from "../screens/Profile";
import Followers from "../screens/Followers";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

function index() {
  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => (isReadyRef.current = true)}
    >
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <SafeAreaView style={{ flex: 0 }} />
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Followers" component={Followers} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default index;
