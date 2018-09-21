import { Alert } from 'react-native';

const alertTitles = {
  title: 'Alert',
  ok: 'OK',
  cancel: 'Cancel',

  warning: 'Warning',
  success: 'Success',
  error: 'Error',
  failure: 'Failure',

  connectionFailure: 'Connection Failure',
};

const alertContents = {
  noNetwork: 'Device is offline'
};

const _alert = (
  title = alertTitles.title,
  content = '',
  buttons = [{ text: alertTitles.ok, onPress: () => {} }]
) => {
  Alert.alert(title, content, buttons);
};

const alertNoNetwork = () => Alert.alert(alertTitles.connectionFailure, alertContents.noNetwork, [{ text: alertTitles.ok, onPress: () => {} }]);

export { alertTitles, alertContents, _alert, alertNoNetwork };
