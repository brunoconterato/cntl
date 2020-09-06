import React from 'react';
import {Navigation} from 'react-native-navigation';
import {appScreens} from '.';
import MonthScreen from '../screens/MonthScreen';
import BillingDetailsScreen from '../screens/BillingDetailsScreen';
import {Provider} from 'react-redux';
import {store} from '../store';

const applyStore = (Component) => (props) => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
);

const registerComponents = () => {
  Navigation.registerComponent(appScreens.monthScreen, () =>
    applyStore(MonthScreen),
  );
  Navigation.registerComponent(appScreens.billingDetailsScreen, () =>
    applyStore(BillingDetailsScreen),
  );
};

export default registerComponents;
