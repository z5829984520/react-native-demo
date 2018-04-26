/*
* 公共的一些小模块方法
* */
import {
  Dimensions
} from 'react-native'

/*
* 获取视口高度 宽度 缩放
* */
export function getScreen() {
  return {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    scale: Dimensions.get('window').scale
  }
}