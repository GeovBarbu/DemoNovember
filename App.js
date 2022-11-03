/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import {createTheme, ThemeProvider} from '@rneui/themed'
import {NavigationContainer} from '@react-navigation/native'
import {MainStackNavigator} from './navigation/MainNavigator'
import codePush from "react-native-code-push"

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const theme = createTheme({
  lightColors: {
    background: '#f0f0f0',
    black: '#242424',
    disabled: 'hsl(208, 8%, 90%)',
    divider: '#bcbbc1',
    error: '#ff190c',
    grey0: '#393e42',
    grey1: '#43484d',
    grey2: '#5e6977',
    grey3: '#86939e',
    grey4: '#bdc6cf',
    grey5: '#e1e8ee',
    greyOutline: '#bbb',
    primary: '#66a3ff',
    searchBg: '#303337',
    secondary: '#ffb3d1',
    success: '#52c41a',
    warning: '#faad14',
    white: '#ffffff'
  },
  darkColors: {
    background: '#3f3f3f',
    black: '#242424',
    disabled: 'hsl(208, 8%, 90%)',
    divider: '#bcbbc1',
    error: '#ff190c',
    grey0: '#393e42',
    grey1: '#43484d',
    grey2: '#5e6977',
    grey3: '#86939e',
    grey4: '#bdc6cf',
    grey5: '#e1e8ee',
    greyOutline: '#bbb',
    primary: '#800000',
    searchBg: '#303337',
    secondary: '#336600',
    success: '#52c41a',
    warning: '#faad14',
    white: '#ffffff'
  },
  Button: {
    raised: true,
    type: 'outline'
  },
  mode: 'light'
})

const App = () => {
  if (__DEV__) {
    console.log("I'm in dev")
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default codePush(App)
