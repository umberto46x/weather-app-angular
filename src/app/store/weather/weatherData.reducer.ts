import { createReducer, on, props } from '@ngrx/store';
import { WeatherDataResponse } from '../../models/WeatherDataResponse';
import {
  setErrorWeatherData,
  setLoadingWeatherData,
  setWeatherData,
} from './weatherData.actions';

export interface WeatherDataState {
  data: WeatherDataResponse | undefined;
  error: undefined | string;
  status: 'Pending' | 'Loading' | 'Success' | 'Error';
}

const initialWeatherDataState: WeatherDataState = {
  data: undefined,
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
    setWeatherData,
    (state, payload): WeatherDataState => ({
      ...state,
      status: 'Success',
      data: payload,
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
