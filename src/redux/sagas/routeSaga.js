import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchRouteSuccess, fetchRouteFailure, fetchRouteStart } from '../reducers/routeSlice';
import { fetchRouteData } from '../../services/api';

function* fetchRouteDataSaga(action) {
  try {
    yield put(fetchRouteStart());
    const routeData = yield call(fetchRouteData, action.payload);
    yield put(fetchRouteSuccess(routeData));
  } catch (error) {
    yield put(fetchRouteFailure(error.message));
  }
}

export function* routeSaga() {
  yield takeLatest('route/fetchRoute', fetchRouteDataSaga);
}