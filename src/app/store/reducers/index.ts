import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { weatherDataReducer, WeatherDataState } from './weatherData.reducer';

export interface AppState {
  weatherData: WeatherDataState;
}

export const reducers: ActionReducerMap<AppState> = {
  weatherData: weatherDataReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
