import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'

import Styles from '../constants/Styles'

import {Card, useTheme} from '@rneui/themed'

const ScreenB = (props) => {
  const { theme } = useTheme()
  return (
    <SafeAreaView style={Styles.fullScreen}>
      <View
        style={[Styles.screen, { backgroundColor: theme.colors.background }]}
      >
        <Card>
          <Text>Hello MoTO</Text>
        </Card>
      </View>
    </SafeAreaView>
  )
}

export default ScreenB;
