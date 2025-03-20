import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home';
import { useEffect } from 'react';
import { getKey } from '../../service/AsyncStorage';
import theme from '../../appearance/theme';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/api_slice/theme';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false
      },
    },
  },
});

const NavigationConfig = createStaticNavigation(RootStack);

const Navigation = () => {

  const dispatch = useDispatch();

  const setTheme=async()=>{
    const theme =await getKey('theme')
    console.log('theme',theme);
    if (theme) {
      dispatch(toggleTheme(theme));
    }
  }
  useEffect(() => {
    setTheme()
  }, [])

  return <NavigationConfig />
}
export default Navigation;