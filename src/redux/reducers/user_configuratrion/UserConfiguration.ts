import {
  CLEAR_ERROR_MESSAGE,
  FETCH_FAILED,
  GET_CITY_SUCCESS,
  GET_THEME_SUCCESS,
  SET_CITY_SUCCESS,
  SET_THEME_SUCCESS,
} from '../../../constants/Constans';
const initialState = {
  city: '',
  theme: '',
  errorMessage: '',
};
export type initialStateType = typeof initialState;
export const UserConfigurationReducer = (
  state = initialState,
  action,
): initialStateType => {
  switch (action.type) {
    case GET_CITY_SUCCESS:
    case SET_CITY_SUCCESS:
      return {
        ...state,
        city: action.city,
      };
    case GET_THEME_SUCCESS:
    case SET_THEME_SUCCESS:
      return {
        ...state,
        theme: action.theme,
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
