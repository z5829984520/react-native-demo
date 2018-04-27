import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'
import { CommonStatusBar } from '../../components'
import * as homeAction from '../../action/homeAction'

class Home extends Component{
  constructor(props) {
    super(props);
  }


  render() {
    const { count, add, sub } = this.props;
    return(
      <View>
        <Text>{count}</Text>
        <Button title="+" onPress={() => add()} />
        <Button title="-" onPress={() => sub()} />
      </View>
    )
  }
}


export default connect(
  (state) => ({
    count: state.HomeState.count
  }),
  (dispatch) => ({
    add: () => dispatch(homeAction.add()),
    sub: () => dispatch(homeAction.sub())
  })
)(Home)