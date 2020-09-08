import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import styles from './styles';
import {formatPrice} from '../../utils/priceformatter';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import moment from 'moment';

const BillingDetailsScreen = ({billing}: {billing: Billing}) => (
  <ScrollView style={styles.container}>
    <View style={styles.headerContainer}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: '#566475',
            fontWeight: 'bold',
            position: 'relative',
            top: 10,
          }}>
          R${' '}
        </Text>
        <View
          style={{
            borderWidth: 2,
            borderColor: '#ee48d3',
          }}>
          <Text
            style={{
              color: '#566475',
              fontWeight: 'bold',
              fontSize: 30,
            }}>
            {formatPrice(billing.value)}
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.infoContainer}>
      <View style={styles.row}>
        <Icon name="calendar-month" size={20} color="#7e8997" />
        <Text style={{color: '#6a7786', fontWeight: 'bold'}}>
          {' '}
          {moment(billing.date, 'DD/MM/YY').format('DD/MM/YY')}
        </Text>
      </View>
      <Text>{billing.description}</Text>
      <View style={styles.row}>
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
      <View style={styles.row}>
        <Image
          style={{marginTop: 3, marginRight: 10}}
          source={
            billing.refundable
              ? require('../../../assets/money_green.png')
              : require('../../../assets/money_gray.png')
          }
        />
        <Text
          style={{
            color: billing.refundable ? '#4dde8c' : '#b7c3cb',
            fontWeight: 'bold',
          }}>
          {billing.refundable ? 'Reembolsável' : 'Não reembolsável'}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: '#b7c3cb',
          borderRadius: 6,
          padding: 10,
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Icon
          name="calendar-check"
          size={26}
          color="#7e8997"
          style={{marginRight: 5}}
        />
        <View>
          <Text style={{color: '#345871', fontSize: 14, fontWeight: 'bold'}}>
            {billing.branch}
          </Text>
          <Text style={{color: '#345871', fontSize: 10}}>
            {moment(billing.date, 'DD/MM/YY').format('DD/MM/YY[ - ]HH[h]mm')}
          </Text>
        </View>
      </View>
      <Image
        resizeMode="cover"
        source={require('../../../assets/nota.png')}
        style={{width: '100%', borderRadius: 10}}
      />
    </View>
  </ScrollView>
);

export default BillingDetailsScreen;
