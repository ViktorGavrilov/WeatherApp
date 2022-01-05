import {put, takeEvery} from 'redux-saga/effects';

import {GET_CURRENT_WEATHER} from '../../../constants/Constans';
import {weatherApi} from '../../../dal/api/Api';
import {
  clearErrorMessage,
  fetchFailed,
  getCurrentWeatherSuccess,
  GetCurrentWeatherType,
} from '../../actions/Actions';

export function* mainWeatherSaga() {
  yield takeEvery(GET_CURRENT_WEATHER, getCurrentWeatherSaga);
}

function* getCurrentWeatherSaga(action: GetCurrentWeatherType) {
  try {
    const response = yield weatherApi.currentWeather(action.name);
    const responseForecast = yield weatherApi.weatherForecast(
      response.data.coord.lat,
      response.data.coord.lon,
      'minutely',
    );
    yield put(
      getCurrentWeatherSuccess({
        name: response.data.name,
        temperature: response.data.main,
        weather: response.data.weather,
        coordinates: {
          lat: response.data.coord.lat,
          lon: response.data.coord.lon,
        },
        weatherForTwoDays: responseForecast.data.hourly,
        weatherForSevenDays: responseForecast.data.daily,
      }),
    );
  } catch (e) {
    yield put(fetchFailed(e.message));
    console.log(e.message);
  } finally {
    yield new Promise(res => setTimeout(res, 2000));
    yield put(clearErrorMessage());
  }
}
