import { createAction, props } from '@ngrx/store';
import { WeatherDataResponse } from '../../models/WeatherDataResponse';

export const setWeatherData = createAction(
  '[WeatherData API] Retrieve Weather Data',
  props<WeatherDataResponse>(),
);

export const setLoadingWeatherData = createAction(
  '[WeatherData Component] Set Loading Status',
);

export const setErrorWeatherData = createAction(
  '[WeatherData Component] Set Error Status',
  props<{ error: string }>(),
);
