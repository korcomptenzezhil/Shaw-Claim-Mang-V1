import { createAction, props } from '@ngrx/store';

export const loadData = createAction('[Dashboard] Load Data');
export const loadDataSuccess = createAction('[Dashboard] Load Data Success', props<{ data: any }>());
export const bindData = createAction('[Dashboard] Bind Data');
export const bindDataSuccess = createAction('[Dashboard] Bind Data Success', props<{ data: any }>());
