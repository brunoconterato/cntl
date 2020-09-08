import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {goToBillingDetailsScreen} from '../../navigation/stack';
import { formatPrice } from '../../utils/priceformatter';

const BillingCard = ({componentId, billing}: {billing: Billing}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => goToBillingDetailsScreen(billing, componentId)}>
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
        <Text>{formatPrice(billing.value)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BillingCard;
