import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import DesktopScreen from '../Containers/DesktopScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  RegisterScreen: { screen: RegisterScreen },
  DesktopScreen: {screen: DesktopScreen} 
  
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  },  
})

export default PrimaryNav
