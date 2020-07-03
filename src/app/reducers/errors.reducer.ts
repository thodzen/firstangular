import { createReducer, on, Action } from '@ngrx/store';
import * as mediaActions from '../actions/media.actions';
import * as appActions from '../actions/app.actions';

export interface ErrorState {
  hasError: boolean;
  errorMessage: string;
}

const initialState: ErrorState = {
  hasError: false,
  errorMessage: null
};

const myReducer = createReducer(
  initialState,
  on(appActions.clearError, () => ({ hasError: false, errorMessage: null })),
  on(mediaActions.mediaAddedFailure, (s, a) => ({ hasError: true, errorMessage: a.message }))
);

export function reducer(state: ErrorState, action: Action): ErrorState {
  return myReducer(state, action);
}
