import {
  CLEAR_ERROR_MESSAGE,
  FETCH_FAILED,
  GET_CURRENT_WEATHER_SUCCESS,
} from '../../../constants/Constans';
const initialState = {
  name: '',
  currentWeather: [],
  currentTemperature: {},
  coordinates: {},
  errorMessage: '',
  weatherForTwoDays: [],
  weatherForSevenDays: [],
};

export type initialStateType = typeof initialState;
export const WeatherReducer = (
  state = initialState,
  action,
): initialStateType => {
  switch (action.type) {
    case GET_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        currentWeather: action.payload.weather,
        currentTemperature: action.payload.temperature,
        coordinates: action.payload.coordinates,
        weatherForTwoDays: action.payload.weatherForTwoDays,
        weatherForSevenDays: action.payload.weatherForSevenDays,
      };
    case FETCH_FAILED:
      return {
        ...state,
        errorMessage: action.message,
      };
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: '',
      };
    default:
      return state;
  }
};
