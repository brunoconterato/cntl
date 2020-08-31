/**
 * @format
 */

import App from './App';
import {Navigation} from 'react-native-navigation';
import {goToMonthScreen} from './src/navigation/stack';
import registerComponents from './src/navigation/register';

registerComponents();

// Navigation.registerComponent('com.cntl.app', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  goToMonthScreen();
});
