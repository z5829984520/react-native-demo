import { StackNavigator } from 'react-navigation'
import TabBar from './TabBar'

const Router = StackNavigator({
  TabBar: {
    screen: TabBar
  }
});

export default Router