import React from 'react'
import { TabNavigator } from 'react-navigation'
import {
  View,
  Image,
  StyleSheet,
  Platform
} from 'react-native'
import {
  Home,
  A,
  B,
  C,
} from '../views'
import {DEFAULT_TAB_ACTIVE_COLOR, DEFAULT_TAB_BACKGROUND_COLOR, DEFAULT_TAB_COLOR, TAB_HOME_ICON, TAB_HOME_LABEL} from "../config";

const OS = Platform.OS;

const TabBar = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
      tabBarLabel: TAB_HOME_LABEL,
      tabBarIcon: ({ tintColor }) => (
        <View style={styles.tabBarWrapper}>
          <Image source={TAB_HOME_ICON} style={[ styles.icon, {tintColor} ]} />
        </View>
      )
    }
  },
  A: {
    screen: A,
    navigationOptions: {
      header: null,
      tabBarLabel: TAB_HOME_LABEL,
      tabBarIcon: ({ tintColor }) => (
        <View style={styles.tabBarWrapper}>
          <Image source={TAB_HOME_ICON} style={[ styles.icon, {tintColor} ]} />
        </View>
      )
    }
  },
  B: {
    screen: B,
    navigationOptions: {
      header: null,
      tabBarLabel: TAB_HOME_LABEL,
      tabBarIcon: ({ tintColor }) => (
        <View style={styles.tabBarWrapper}>
          <Image source={TAB_HOME_ICON} style={[ styles.icon, {tintColor} ]} />
        </View>
      )
    }
  },
  C: {
    screen: C,
    navigationOptions: {
      header: null,
      tabBarLabel: TAB_HOME_LABEL,
      tabBarIcon: ({ tintColor }) => (
        <View style={styles.tabBarWrapper}>
          <Image source={TAB_HOME_ICON} style={[ styles.icon, {tintColor} ]} />
        </View>
      )
    }
  }
}, {
  lazy: true, // 是否开启懒加载
  tabBarPosition: 'bottom', // 位置 top bottom
  initialRouteName: 'Home', // 打开app默认进入页面
  animationEnabled: true, // 是否需要切换动画
  swipeEnabled: true, // 是否开启左右滑动切换
  tabBarOptions: {
    activeTintColor: DEFAULT_TAB_ACTIVE_COLOR, // 激活颜色
    inactiveTintColor: DEFAULT_TAB_COLOR, // 未激活颜色
    showIcon: true,  // 是否显示icon 安卓默认为false
    showLabel: true, // 是否显示tab文字,
    style: {
      backgroundColor: DEFAULT_TAB_BACKGROUND_COLOR,
      height: OS === 'ios' ? 46 : 60,
      borderTopWidth: 0
    },
    labelStyle: {
      fontSize: 12
    },
    iconStyle: {
    },
    indicatorStyle: { // 安卓底部默认有一个线 这里把它去掉了
      height: 0
    }
  }
});

const styles = StyleSheet.create({
  tabBarWrapper: {
  },
  icon: {
    width: 30,
    height: 30
  }
});

export default TabBar