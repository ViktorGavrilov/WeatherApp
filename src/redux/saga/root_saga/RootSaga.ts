import {all} from 'redux-saga/effects';

import {mainWeatherSaga} from '../weather_saga/WeatherSaga';
import {userSaga} from '../user_saga/UserSaga';

export default function* rootSaga() {
  yield all([mainWeatherSaga(), userSaga()]);
}
