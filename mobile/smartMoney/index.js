/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Main from './src/pages/Main';
import NewEntry from './src/pages/NewEntry';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NewEntry);
