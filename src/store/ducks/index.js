import {combineReducers} from 'redux';
import MonthList from './month';

export default combineReducers({
  month: combineReducers({
    list: MonthList,
  }),
});