import { createReducer, on } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';

export interface DashboardState {
  data: any;
}

export const initialState: DashboardState = {
  data: null,
};

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.loadDataSuccess, (state, { data }) => ({
    ...state,
    data: data,
  })),
  on(DashboardActions.bindDataSuccess, (state, { data }) => ({
    ...state,
    data: data,
  }))
);
