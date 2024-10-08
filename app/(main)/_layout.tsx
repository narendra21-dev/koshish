import { View, Text, ScrollView, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { Navigator, Slot, Stack, Tabs, useNavigation, } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'



const MainStack = () => {



    return (

        // <Stack>
        //     {/* <Stack.Screen name='index' /> */}
        //     <Stack.Screen name='dashborad' />
        // </Stack>



        <Tabs screenOptions={{
            tabBarActiveTintColor: '#12a1cc', headerShown: false,
            tabBarStyle: { backgroundColor: '#28282B' },
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'index',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,

                }}
            />
            <Tabs.Screen
                name="dashborad"
                options={{
                    title: 'dashborad',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
            <Tabs.Screen
                name="qna"
                options={{
                    title: '<QA/>',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
            <Tabs.Screen
                name="(dashborad)"
                options={{
                    title: 'New',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
    )
}

export default MainStack