import {Navigation} from 'react-native-navigation';
import {appScreens} from '.';

export const goToMonthScreen = () => {
  return Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: appScreens.monthScreen,
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const goToBillingDetailsScreen = (billing: Billing, componentId) => {
  return Navigation.push(componentId, {
    component: {
      name: appScreens.billingDetailsScreen,
      passProps: {
        billing,
      },
      options: {
        topBar: {
          visible: true,
          title: 'Conta',
          backButton: {
            visible: true,
          },
        },
      },
    },
  });
};
