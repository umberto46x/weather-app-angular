import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const selectWeatherState = (state: AppState) => state.weatherData;

export const selectCurrentData = createSelector(
  selectWeatherState,
  (state) => state.data.currentWeatherData,
);
export const selectForecastData = createSelector(
  selectWeatherState,
  (state) => state.data.forecastedWeatherData,
);

export const selectStatus = createSelector(
  selectWeatherState,
  (state) => state.status,
);
