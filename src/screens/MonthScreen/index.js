import React from 'react';
import {Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Creators} from '../../store/ducks/month';

const MonthScreen = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.month);
  React.useEffect(() => {
    dispatch(Creators.getRequest({id: 0}));
  }, []);

  React.useEffect(() => {
    console.log('Month data updated', data);
  }, [data]);

  return <Text>Month Screen</Text>;
};

export default MonthScreen;
