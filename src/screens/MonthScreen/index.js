import React from 'react';
import {Text, SectionList, SafeAreaView, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Creators} from '../../store/ducks/month';
import styles from './styles';
import BillingCard from '../../components/BillingCard';
import moment from 'moment';


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

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <BillingCard billing={item} />}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{moment(title).format('DD')}</Text>
            <Text style={styles.header}>{moment(title).isoWeekday()}</Text>
          </View>
        )}
        ListHeaderComponent={(item) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
};

export default MonthScreen;
