import { Navigation } from 'react-native-navigation';
import { registerScreens, screens } from './src/screens/register';
import { configProps } from './overrideDefaultComponentsProps';
import { store } from './src/redux/reducers';

console.disableYellowBox = true;
configProps();
registerScreens(store);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: screens.splash
      }
    }
  });
});
