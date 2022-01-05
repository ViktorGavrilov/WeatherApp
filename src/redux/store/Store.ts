import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/root_saga/RootSaga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {WeatherReducer} from '../reducers/weather_reducer/WeatherReducer';
import {combineReducers} from 'redux';
import {UserConfigurationReducer} from '../reducers/user_configuratrion/UserConfiguration';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const RootReducer = combineReducers({
  weather: WeatherReducer,
  userConfig: UserConfigurationReducer,
});
// mount it on the Store
export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
type RootReducerType = typeof RootReducer;
export type AppStateType = ReturnType<RootReducerType>;
// then run the saga
sagaMiddleware.run(rootSaga);
