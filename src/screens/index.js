import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import Overlay from './OverlayScreen';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ForgotScreen from './ForgotScreen';
import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';
import DetailScreen from './DetailScreen';

export const screens = {
  main: 'premiumContact.main',
  auth: 'premiumContact.auth',
  overlay: 'premiumContact.overlay',
  splash: 'premiumContact.splash',
  login: 'premiumContact.login',
  register: 'premiumContact.register',
  forgot: 'premiumContact.forgot',
  tabs: 'premiumContact.tabs',
  tab1: 'premiumContact.tab1',
  tab2: 'premiumContact.tab2',
  detail: 'premiumContact.detail'
};

export const registerScreens = store => {
  Navigation.registerComponentWithRedux(screens.overlay, () => Overlay, Provider, store);
  Navigation.registerComponentWithRedux(screens.splash, () => SplashScreen, Provider, store);
  Navigation.registerComponentWithRedux(screens.login, () => LoginScreen, Provider, store);
  Navigation.registerComponentWithRedux(screens.register, () => RegisterScreen, Provider, store);
  Navigation.registerComponentWithRedux(screens.forgot, () => ForgotScreen, Provider, store);
  Navigation.registerComponentWithRedux(screens.tab1, () => Tab1Screen, Provider, store);
  Navigation.registerComponentWithRedux(screens.tab2, () => Tab2Screen, Provider, store);
  Navigation.registerComponentWithRedux(screens.detail, () => DetailScreen, Provider, store);
};
