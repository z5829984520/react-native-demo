import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StatusBar,
  Platform
} from 'react-native'

const OS = Platform.OS;

export default class CommonStatusBar extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    barStyle: PropTypes.string,
    animated: PropTypes.bool,
    hidden: PropTypes.bool,
    backgroundColor: PropTypes.string,
    translucent: PropTypes.bool,
    showHideTransition: PropTypes.string
  };

  static defaultProps = {
    barStyle: 'default', // default 字体黑色 light-content 字体白色
    animated: false,
    hidden: false, // 是否隐藏状态栏目
    backgroundColor: 'rgba(0, 0, 0, 0)', // Android特有属性 statusBar背景色
    translucent: true, // Android特有属性 布尔类型,状态栏是否半透明,如果为true,应用将从物理顶端开始显示
    showHideTransition: 'fade'
  };

  render() {
    return(
      <View>
        <StatusBar
          barStyle={this.props.barStyle}
          animated={this.props.animated}
          hidden={this.props.hidden}
          backgroundColor={this.props.backgroundColor}
          showHideTransition={this.props.showHideTransition}
          translucent={this.props.translucent}
        />
      </View>
    )
  }
}