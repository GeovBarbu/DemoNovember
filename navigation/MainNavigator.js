import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faChessKing, faChessQueen} from '@fortawesome/free-solid-svg-icons'

import ScreenA from '../screens/ScreenA'
import ScreenB from '../screens/ScreenB'
import {useTheme} from '@rneui/themed'

const Tab = createBottomTabNavigator()
export const TabNavigator = () => {
  const {theme} = useTheme()
  const mainHeaderColors = {
    headerStyle: {backgroundColor: theme.colors.secondary},
    tabBarStyle: {backgroundColor: theme.colors.secondary},
    headerTintColor: theme.colors.primary,
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTintColor: theme.colors.grey3
  }
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: true,
        ...mainHeaderColors
      })}>
      <Tab.Screen
        name="ScreenA"
        component={ScreenA}
        options={() => ({
          title: 'Screen A',
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faChessKing}
              size={22}
              color={focused ? theme.colors.primary : theme.colors.grey3}
            />
          )
        })}
      />
      <Tab.Screen
        name="ScreenB"
        component={ScreenB}
        options={() => ({
          title: 'Screen B',
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faChessQueen}
              size={22}
              color={focused ? theme.colors.primary : theme.colors.grey3}
            />
          )
        })}
      />
    </Tab.Navigator>
  )
}

const MainStack = createStackNavigator()
export const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false
      })}>
      <MainStack.Screen name="TabNavigator" component={TabNavigator} />
    </MainStack.Navigator>
  )
}
