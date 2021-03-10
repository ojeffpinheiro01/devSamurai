/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Main from './src/pages/Main';
import Report from './src/pages/Report';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Report);
