import {call, put, takeLatest, all} from 'redux-saga/effects';
import api from '../../service/api';
import {Types, Creators} from '../ducks/month';

function* getRequest({payload: {id}}) {
  try {
    const response = yield call(api);
    if (response.status !== 200) {
      throw response;
    }
    console.log(response);
    yield put(Creators.getSuccess(response));
  } catch (error) {
    yield put(Creators.getFailure('Houve um erro'));
  }
}

export default function* month() {
  yield all([takeLatest(Types.GET_REQUEST, getRequest)]);
}
