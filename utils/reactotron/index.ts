/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import AsyncStorage from '@react-native-async-storage/async-storage';

// If you want to use a physical device and connect it to reactotron, execute
// first `adb reverse tcp:9090 tcp:9090`

let reactotron;

if (__DEV__) {
  const { default: Reactotron } = require('reactotron-react-native');
  const { reactotronRedux } = require('reactotron-redux');
  reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect();
}

export default reactotron;
