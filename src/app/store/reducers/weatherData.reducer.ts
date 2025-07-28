import { createReducer, on, props } from '@ngrx/store';
import { CurrentWeatherResponse } from '../../models/CurrentWeatherResponse';
import { ForecastedWeatherResponse } from '../../models/ForecastedWeatherResponse';
import {
  setCurrentWeatherData,
  setErrorWeatherData,
  setForecastedWeatherData,
  setLoadingWeatherData,
} from '../actions/weatherData.actions';
export interface WeatherDataState {
  data: {
    currentWeatherData?: CurrentWeatherResponse;
    forecastedWeatherData?: ForecastedWeatherResponse;
  };
  error: undefined | string;
  status: 'Pending' | 'Loading' | 'Success' | 'Error';
}

const initialWeatherDataState: WeatherDataState = {
  data: {},
  error: undefined,
  status: 'Pending',
};

export const weatherDataReducer = createReducer(
  initialWeatherDataState,
  on(
    setLoadingWeatherData,
    (state): WeatherDataState => ({
      ...state,
      status: 'Loading',
    }),
  ),
  on(
    setCurrentWeatherData,
    (state, payload): WeatherDataState => ({
      ...state,
      status: 'Success',
      data: {
        currentWeatherData: payload,
      },
    }),
  ),
  on(
    setForecastedWeatherData,
    (state, payload): WeatherDataState => ({
      ...state,
      status: 'Success',
      data: {
        forecastedWeatherData: payload,
      },
    }),
  ),
  on(
    setErrorWeatherData,
    (state, { error }): WeatherDataState => ({
      ...state,
      error: error,
      status: 'Error',
    }),
  ),
);
