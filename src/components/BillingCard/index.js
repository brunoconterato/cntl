import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const BillingCard = ({componentId, billing}: {billing: Billing}) => {
  console.log('Billing', billing);
  return (
    <View style={styles.container}>
      <View style={styles.infoView}>
        <Text
          style={{
            color: billing.refundable ? '#5c5c5c' : '#b7c3cb',
            textDecorationLine: billing.refundable ? null : 'line-through',
          }}>
          {billing.description}
        </Text>
        <View style={styles.typeRow}>
          <Image
            style={{marginTop: 3, marginRight: 4}}
            source={
              billing.refundable
                ? require('../../../assets/food_dark.png')
                : require('../../../assets/food_light.png')
            }
          />
          <Text
            style={{
              color: billing.refundable ? '#5c5c5c' : '#b7c3cb',
            }}>
            {billing.type}
          </Text>
        </View>
      </View>
      <View style={styles.valueView}>
        <Image
          style={{marginTop: 3, marginRight: 4}}
          source={
            billing.refundable
              ? require('../../../assets/money_green.png')
              : require('../../../assets/money_gray.png')
          }
        />
        <Text>{billing.value.toFixed(2).replace('.', ',')}</Text>
      </View>
    </View>
  );
};

export default BillingCard;
