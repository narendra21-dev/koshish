import { View, Text, } from 'react-native'
import React, { useState } from 'react'
import { Redirect, router, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { useUser } from '@clerk/clerk-expo';


var aSign = false;

const RootLayout = () => {
  const [isLogin, setIsLogin] = useState(false);
  

  return (
    <>
      {/* <StatusBar backgroundColor="white" barStyle="default" /> */}
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false, }} />


      {
        isLogin ? (<Redirect href={"/(main)"} />) : (<Redirect href={"/(auth)/"} />)
      }

    </>

  );
};

export default RootLayout