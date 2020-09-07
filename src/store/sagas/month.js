import {call, put, takeLatest, all} from 'redux-saga/effects';
// import api from '../../service/api';
import {Types, Creators} from '../ducks/month';
import db from '../../../server/db.json';

function* getRequest({payload: {id}}) {
  try {
    // const response = yield call(api.get, `/months`);
    // console.log('The response', response);
    // if (response.status !== 200) {
    //   throw response;
    // }
    yield put(Creators.getSuccess({data: db}));
  } catch (error) {
    console.log(error);
    yield put(Creators.getFailure('Houve um erro'));
  }
}

export default function* month() {
  yield all([takeLatest(Types.GET_REQUEST, getRequest)]);
}
