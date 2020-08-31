import {Navigation} from 'react-native-navigation';
import {appScreens} from '.';
import MonthScreen from '../screens/MonthScreen';
import BillingDetailsScreen from '../screens/BillingDetailsScreen';

const registerComponents = () => {
  Navigation.registerComponent(appScreens.monthScreen, () => MonthScreen);
  Navigation.registerComponent(
    appScreens.billingDetailsScreen,
    () => BillingDetailsScreen,
  );
};

export default registerComponents;
