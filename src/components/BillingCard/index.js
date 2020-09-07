import React from 'react';
import {Text} from 'react-native';

const BillingCard = ({componentId, billing}: {billing: Billing}) => {
  console.log('Billing', billing);
  return <Text>{billing.description}</Text>;
};

export default BillingCard;
