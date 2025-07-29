import { createSelector } from '@ngrx/store';
import { AppState } from '..';

export const selectWeatherState = (state: AppState) => state.weatherData;

export const selectWeatherData = createSelector(
  selectWeatherState,
  (state) => state.data,
);

export const selectError = createSelector(
  selectWeatherState,
  (state) => state.error,
);

export const selectStatus = createSelector(
  selectWeatherState,
  (state) => state.status,
);
