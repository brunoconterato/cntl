import React from 'react';
import {Text, SectionList, SafeAreaView, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Creators} from '../../store/ducks/month';
import styles from './styles';
import BillingCard from '../../components/BillingCard';
import moment from 'moment';
import 'moment/locale/pt-br';
import {formatPrice} from '../../utils/priceformatter';

moment.locale('pt-br');

const MonthScreen = ({componentId}) => {
  const dispatch = useDispatch();
  const {data}: {data: Month} = useSelector((state) => state.month);
  React.useEffect(() => {
    dispatch(Creators.getRequest({id: 0}));
  }, []);

  const [sections, setSections] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  const formatSection = () => {
    const config = [];
    const mapByTitle = {};
    let dates = [];
    let totalValue = 0.0;
    data?.billings?.map((b) => {
      const date = moment(b.date, 'DD/MM/YY');
      if (!mapByTitle[date]) {
        mapByTitle[date] = [];
        dates.push(date);
      }
      mapByTitle[date].push(b);
      totalValue += b.value;
    });
    dates = dates.sort((a, b) => moment(a) - moment(b));
    for (let i = 0; i < dates.length; i++) {
      config.push({
        title: dates[i],
        data: mapByTitle[dates[i]],
      });
    }
    setSections(config);
    setTotal(totalValue);
  };

  React.useEffect(formatSection, [data]);

  const getDayText = (date) => {
    return moment(date).format('DD');
  };

  const getWeekDayText = (date) => {
    return moment(date).format('dddd').split('-')[0].toUpperCase();
  };

  const SectionHeader = ({section: {title}}) => (
    <View style={styles.listHeaderContainer}>
      <Text style={styles.listHeaderDay}>{getDayText(title)}</Text>
      <Text style={styles.listHeaderWeekDay}>{getWeekDayText(title)}</Text>
    </View>
  );

  const Header = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{data?.name}</Text>
    </View>
  );

  const Footer = () => (
    <View style={styles.footerContainer}>
      <Text style={styles.footerTotal}>TOTAL</Text>
      <Text>
        <Text style={styles.footerMoneyValue}>R$ </Text>
        <Text style={styles.footerValue}>{formatPrice(total)}</Text>
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        contentContainerStyle={{
          // backgroundColor: 'red',
          flex: 1,
          // backgroundColor: '#f6f8fb',
        }}
        sections={sections}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <BillingCard billing={item} componentId={componentId} />
        )}
        renderSectionHeader={SectionHeader}
        ListHeaderComponent={Header}
        // ListFooterComponent={Footer}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default MonthScreen;
