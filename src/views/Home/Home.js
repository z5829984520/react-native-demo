import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { CommonStatusBar } from '../../components'

export default class Home extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <CommonStatusBar />
        <Text>home</Text>
      </View>
    )
  }
}