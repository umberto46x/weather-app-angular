import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  weatherDataReducer,
  WeatherDataState,
} from './weather/weatherData.reducer';

export interface AppState {
  weatherData: WeatherDataState;
}

export const reducers: ActionReducerMap<AppState> = {
  weatherData: weatherDataReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
