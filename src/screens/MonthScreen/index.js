import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

const MonthScreen = () => {
  const {data} = useSelector((state) => state.month);
  console.log(data);

  return <Text>Month Screen</Text>;
};

export default MonthScreen;
