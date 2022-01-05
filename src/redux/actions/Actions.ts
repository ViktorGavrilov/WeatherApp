import {
  CLEAR_ERROR_MESSAGE,
  FETCH_FAILED,
  GET_CITY,
  GET_CURRENT_WEATHER,
  GET_CURRENT_WEATHER_SUCCESS,
  GET_THEME,
  GET_THEME_SUCCESS,
  SET_CITY,
  SET_CITY_SUCCESS,
  SET_THEME,
  SET_THEME_SUCCESS,
} from '../../constants/Constans';

export type GetCurrentWeatherType = {
  type: typeof GET_CURRENT_WEATHER;
  name: string;
};

export type GetCurrentWeatherSuccessPayloadType = {
  name: string;
  temperature: number;
  weather: string;
  coordinates: {};
  weatherForTwoDays: [];
  weatherForSevenDays: [];
};
type GetCurrentWeatherSuccessType = {
  type: typeof GET_CURRENT_WEATHER_SUCCESS;
  payload: GetCurrentWeatherSuccessPayloadType;
};
export const getCurrentWeather = (name: string): GetCurrentWeatherType => ({
  type: GET_CURRENT_WEATHER,
  name,
});
export const getCurrentWeatherSuccess = (
  payload: GetCurrentWeatherSuccessPayloadType,
): GetCurrentWeatherSuccessType => ({
  type: GET_CURRENT_WEATHER_SUCCESS,
  payload,
});

type FetchFailedType = {
  type: typeof FETCH_FAILED;
  message: string;
};
type ClearErrorMessageType = {
  type: typeof CLEAR_ERROR_MESSAGE;
};

export const fetchFailed = (message: string): FetchFailedType => ({
  type: FETCH_FAILED,
  message,
});
export const clearErrorMessage = (): ClearErrorMessageType => ({
  type: CLEAR_ERROR_MESSAGE,
});

type SetUserCityType = {
  type: typeof SET_CITY;
  city: string;
};
export const setUserCity = (city: string): SetUserCityType => ({
  type: SET_CITY,
  city,
});
type SetUserCitySuccessType = {
  type: typeof SET_CITY_SUCCESS;
  city: string;
};
export const setUserCitySuccess = (city: string): SetUserCitySuccessType => ({
  type: SET_CITY_SUCCESS,
  city,
});

type GetUserCityType = {
  type: typeof GET_CITY;
};
export const getUserCity = (): GetUserCityType => ({type: GET_CITY});

type GetUserCitySuccessType = {
  type: typeof SET_CITY_SUCCESS;
  city: string;
};
export const getUserCitySuccess = (city: string): GetUserCitySuccessType => ({
  type: SET_CITY_SUCCESS,
  city,
});

type SetUserThemeType = {
  type: typeof SET_THEME;
  theme: string;
};
export const setUserTheme = (theme: string): SetUserThemeType => ({
  type: SET_THEME,
  theme,
});
type SetUserThemeSuccessType = {
  type: typeof SET_THEME_SUCCESS;
  theme: string;
};
export const setUserThemeSuccess = (
  theme: string,
): SetUserThemeSuccessType => ({type: SET_THEME_SUCCESS, theme});

type GetUserThemeType = {
  type: typeof GET_THEME;
};
export const getUserTheme = (): GetUserThemeType => ({type: GET_THEME});
type GetUserThemeSuccessType = {
  type: typeof GET_THEME_SUCCESS;
  theme: string;
};
export const getUserThemeSuccess = (
  theme: string,
): GetUserThemeSuccessType => ({type: GET_THEME_SUCCESS, theme});
