import { AppRegistry } from 'react-native';
import AppWrapper from './src/AppWrapper';
import { name as appName } from './app.json';

// eslint-disable-next-line no-undef
if (__DEV__) {
  import('./src/utils/reactotron').then(() =>
    // eslint-disable-next-line no-undef
    console.log('Reactotron Configured')
  );
}

AppRegistry.registerComponent(appName, () => AppWrapper);
