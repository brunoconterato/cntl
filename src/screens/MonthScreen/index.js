import React from 'react';
import {Text, SectionList, SafeAreaView, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Creators} from '../../store/ducks/month';
import styles from './styles';
import BillingCard from '../../components/BillingCard';
import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

const MonthScreen = () => {
  const dispatch = useDispatch();
  const {data}: {data: Month} = useSelector((state) => state.month);
  React.useEffect(() => {
    dispatch(Creators.getRequest({id: 0}));
  }, []);

  const [sections, setSections] = React.useState([]);

  const formatSection = () => {
    const config = [];
    const mapByTitle = {};
    let dates = [];
    config.push();
    data?.billings?.map((b) => {
      const date = moment(b.date, 'DD/MM/YY');
      if (!mapByTitle[date]) {
        mapByTitle[date] = [];
        dates.push(date);
      }
      mapByTitle[date].push(b);
    });
    dates = dates.sort();
    for (let i = 0; i < dates.length; i++) {
      config.push({
        title: dates[i],
        data: mapByTitle[dates[i]],
      });
    }
    setSections(config);
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
      <Text style={styles.header}>{getDayText(title)}</Text>
      <Text style={styles.header}>{getWeekDayText(title)}</Text>
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
      <Text style={styles.footerValue}>490</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        contentContainerStyle={{
          // backgroundColor: 'red',
          flex: 1,
        }}
        sections={sections}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <BillingCard billing={item} />}
        renderSectionHeader={SectionHeader}
        ListHeaderComponent={Header}
        // ListFooterComponent={Footer}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default MonthScreen;
