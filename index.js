import { Navigation } from 'react-native-navigation';
import { registerScreens, screens } from './src/screens/register';
import { configProps } from './overrideDefaultComponentsProps';
import { store } from './src/redux/reducers';

import alert from './src/assets/icon1.png';
import auth from './src/assets/icon2.png';

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

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Main',
        children: [
          {
            bottomTabs: {
              id: 'MainTabs',
              children: [
                {
                  component: {
                    name: screens.tab1,
                    options: {
                      bottomTab: {
                        fontSize: 12,
                        text: 'tab 1',
                        icon: alert
                      }
                    }
                  }
                },
                {
                  component: {
                    name: screens.tab2,
                    options: {
                      bottomTab: {
                        text: 'tab 2',
                        fontSize: 12,
                        icon: auth
                      }
                    }
                  }
                }
              ],
              options: {}
            }
          }
        ]
      }
    }
  });
});

Navigation.events().registerBottomTabSelectedListener(
  ({ selectedTabIndex, unselectedTabIndex }) => {
    console.log(selectedTabIndex, unselectedTabIndex);
  }
);
