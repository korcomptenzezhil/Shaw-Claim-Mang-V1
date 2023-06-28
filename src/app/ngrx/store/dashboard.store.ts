import { Action, ActionReducerMap } from '@ngrx/store';
import { DashboardState, dashboardReducer } from './dashboard.reducer';

export interface AppState {
  dashboard: DashboardState;
}

export const reducers: ActionReducerMap<AppState, Action> = {
  dashboard: dashboardReducer,
};
