import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const BillingCard = ({componentId, billing}: {billing: Billing}) => {
  console.log('Billing', billing);
  return (
    <View style={styles.container}>
      <Text>{billing.description}</Text>
    </View>
  );
};

export default BillingCard;
