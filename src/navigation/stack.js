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
