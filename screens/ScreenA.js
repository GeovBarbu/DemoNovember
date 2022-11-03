import React from 'react'
import {View, SafeAreaView} from 'react-native'

import Styles from '../constants/Styles'
import {Button, useTheme, useThemeMode, Card} from '@rneui/themed'

const ScreenA = props => {
  const {mode, setMode} = useThemeMode()
  const {theme} = useTheme()

  return (
    <SafeAreaView style={Styles.fullScreen}>
      <View style={[Styles.screen, {backgroundColor: theme.colors.background}]}>
        <Card containerStyle={Styles.cardContainer}>
          <Button
            title={mode}
            onPress={() => setMode(mode === 'dark' ? 'light' : 'dark')}
          />
        </Card>
      </View>
    </SafeAreaView>
  )
}

export default ScreenA
