import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking
} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

console.disableYellowBox = true;

Reactotron.configure({
  name: 'Premium Contact',
  host: '192.168.2.2',
  port: 9090
})
  .use(trackGlobalErrors())
  .use(openInEditor())
  .use(overlay())
  .use(asyncStorage())
  .use(networking())
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

if (__DEV__) {
  Reactotron.connect();
  Reactotron.clear();
}

Reactotron.onCustomCommand('test', () =>
  console.tron.log('Begin test Premium Contact')
);

console.tron = Reactotron;
