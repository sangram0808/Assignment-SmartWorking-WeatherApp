import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../containers/home';

const RootStack = createNativeStackNavigator({
    screens: {
       Home: {
        screen: HomeScreen,
        options: {
         headerShown:false
        },
      },
    },
  });

const Navigation = createStaticNavigation(RootStack);


export default Navigation;