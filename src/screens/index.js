import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import Overlay from './component/OverlayScreen';
import SplashScreen from './component/SplashScreen';
import LoginScreen from './component/LoginScreen';
import RegisterScreen from './component/RegisterScreen';
import ForgotScreen from './component/ForgotScreen';
import MainScreen from './component/MainScreen';
import DetailEvent from './component/DetailEvent';
import MapEvent from './component/MapEvent';
import CatalogEvent from './component/CatalogEvent';
import ProgramEvent from './component/ProgramEvent';

export const screens = {
  main: 'premiumContact.main',
  auth: 'premiumContact.auth',
  overlay: 'premiumContact.overlay',
  splash: 'premiumContact.splash',
  login: 'premiumContact.login',
  register: 'premiumContact.register',
  forgot: 'premiumContact.forgot',
  detail: 'premiumContact.detailEvent',
  map: 'premiumContact.mapEvent',
  program: 'premiumContact.program',
  catalog: 'premiumContact.catalog'
};

export const registerScreens = store => {
  Navigation.registerComponentWithRedux(screens.main, () => MainScreen, Provider, store);
  Navigation.registerComponentWithRedux(screens.overlay, () => Overlay, Provider, store);
  Navigation.registerComponentWithRedux(screens.splash, () => SplashScreen, Provider, store);
  Navigation.registerComponentWithRedux(screens.login, () => LoginScreen, Provider, store);
  Navigation.registerComponentWithRedux(screens.register, () => RegisterScreen, Provider, store);
  Navigation.registerComponentWithRedux(screens.forgot, () => ForgotScreen, Provider, store);
  Navigation.registerComponentWithRedux(screens.detail, () => DetailEvent, Provider, store);
  Navigation.registerComponentWithRedux(screens.map, () => MapEvent, Provider, store);
  Navigation.registerComponentWithRedux(screens.catalog, () => CatalogEvent, Provider, store);
  Navigation.registerComponentWithRedux(screens.program, () => ProgramEvent, Provider, store);
};
