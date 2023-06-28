

// import { Action, ActionReducerMap } from '@ngrx/store';
// import { DashboardState, dashboardReducer } from './dashboard.reducer';
// import { LoginState, loginReducer } from './reducers/login.reducer';


// export interface AppState {
//   dashboard: DashboardState;
//   login: LoginState;
// }

// export const reducers: ActionReducerMap<AppState, Action> = {
//   dashboard: dashboardReducer,
//   login: loginReducer,
// };
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from './reducers/login.reducer';

export const selectLoginState = createFeatureSelector<LoginState>('login');

export const selectUser = createSelector(selectLoginState, (state) => state.user);
export const selectError = createSelector(selectLoginState, (state) => state.error);
export const selectLoading = createSelector(selectLoginState, (state) => state.loading);
