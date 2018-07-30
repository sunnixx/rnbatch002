import { createStackNavigator } from 'react-navigation';

//Screens
import LoginScreen from './Screens/LoginScreen'
import DashboardScreen from './Screens/DashboardScreen';

const App = createStackNavigator({
  LoginScreen: {screen: LoginScreen,navigationOptions: {header: null}},
  DashboardScreen: {screen: DashboardScreen, navigationOptions: {header: null}}
});

export default App;