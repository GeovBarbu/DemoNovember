import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'

import Styles from '../constants/Styles'

import {Card} from '@rneui/themed'

const ScreenB = props => {
  return (
    <SafeAreaView style={Styles.fullScreen}>
      <View style={Styles.screen}>
        <Card>
          <Text>Hello MoTO</Text>
        </Card>
      </View>
    </SafeAreaView>
  )
}

export default ScreenB
