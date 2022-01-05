import {put, takeEvery} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GET_CITY,
  GET_THEME,
  KEY_FOR_CITY,
  KEY_FOR_THEME,
  SET_CITY,
  SET_THEME,
} from '../../../constants/Constans';
import {
  clearErrorMessage,
  fetchFailed,
  getUserCitySuccess,
  getUserThemeSuccess,
  setUserCitySuccess,
  setUserThemeSuccess,
} from '../../actions/Actions';

export function* userSaga() {
  yield takeEvery(SET_CITY, setUserCitySaga);
  yield takeEvery(GET_CITY, getUserCitySaga);
  yield takeEvery(SET_THEME, setUserThemeSaga);
  yield takeEvery(GET_THEME, getUserThemeSaga);
}

function* setUserCitySaga(action) {
  try {
    yield AsyncStorage.setItem(KEY_FOR_CITY, action.city);
    yield put(setUserCitySuccess(action.city));
  } catch (e) {
    yield put(fetchFailed(e.message));
    console.log(e.message);
  } finally {
    yield new Promise(res => setTimeout(res, 2000));
    yield put(clearErrorMessage());
  }
}
function* getUserCitySaga() {
  try {
    const city = yield AsyncStorage.getItem(KEY_FOR_CITY);
    yield put(getUserCitySuccess(city));
  } catch (e) {
    yield put(fetchFailed(e.message));
    console.log(e.message);
  } finally {
    yield new Promise(res => setTimeout(res, 2000));
    yield put(clearErrorMessage());
  }
}

function* setUserThemeSaga(action) {
  try {
    console.log(action.theme);
    yield AsyncStorage.setItem(KEY_FOR_THEME, action.theme);
    yield put(setUserThemeSuccess(action.theme));
  } catch (e) {
    yield put(fetchFailed(e.message));
    console.log(e.message);
  } finally {
    yield new Promise(res => setTimeout(res, 2000));
    yield put(clearErrorMessage());
  }
}
function* getUserThemeSaga() {
  try {
    const theme = yield AsyncStorage.getItem(KEY_FOR_THEME);
    yield put(getUserThemeSuccess(theme));
  } catch (e) {
    yield put(fetchFailed(e.message));
    console.log(e.message);
  } finally {
    yield new Promise(res => setTimeout(res, 2000));
    yield put(clearErrorMessage());
  }
}
