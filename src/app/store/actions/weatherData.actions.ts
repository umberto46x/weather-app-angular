import { createAction, props } from '@ngrx/store';
import { CurrentWeatherResponse } from '../../models/CurrentWeatherResponse';
import { ForecastedWeatherResponse } from '../../models/ForecastedWeatherResponse';

export const setCurrentWeatherData = createAction(
  '[WeatherData API] Retrieve CurrentWeather Data',
  props<CurrentWeatherResponse>(),
);
export const setForecastedWeatherData = createAction(
  '[WeatherData API] Retrieve ForecastedWeather Data',
  props<ForecastedWeatherResponse>(),
);

export const setLoadingWeatherData = createAction(
  '[WeatherData Component] Set Loading Status',
);

export const setErrorWeatherData = createAction(
  '[WeatherData Component] Set Error Status',
  props<{ error: string }>(),
);
