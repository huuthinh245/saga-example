import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ForgotScreen from './ForgotScreen';
import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';
import DrawerScreen from './DrawerScreen';

export const definedScreens = {
  drawer: 'app.drawer',
  splash: 'app.splash',
  login: 'app.login',
  register: 'app.register',
  forgot: 'app.forgot',
  tab1: 'app.tab1',
  tab2: 'app.tab2'
};

export const registerScreens = (store) => {
  Navigation.registerComponent(definedScreens.drawer, () => DrawerScreen, store, Provider);
  Navigation.registerComponent(definedScreens.splash, () => SplashScreen, store, Provider);
  Navigation.registerComponent(definedScreens.login, () => LoginScreen, store, Provider);
  Navigation.registerComponent(definedScreens.register, () => RegisterScreen, store, Provider);
  Navigation.registerComponent(definedScreens.forgot, () => ForgotScreen, store, Provider);
  Navigation.registerComponent(definedScreens.tab1, () => Tab1Screen, store, Provider);
  Navigation.registerComponent(definedScreens.tab2, () => Tab2Screen, store, Provider);
};
