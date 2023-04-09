import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// eslint-disable-next-line no-undef
if (__DEV__) {
  import('./utils/reactotron').then(() =>
    // eslint-disable-next-line no-undef
    console.log('Reactotron Configured')
  );
}

AppRegistry.registerComponent(appName, () => App);
