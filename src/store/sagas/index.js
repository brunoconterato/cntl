import {all, fork} from 'redux-saga/effects';
import MonthList from './month';

export default function* () {
  yield all([fork(MonthList)]);
}
