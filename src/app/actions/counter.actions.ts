import { createAction } from '@ngrx/store';

export const countIncremented = createAction(
  '[counter] increment'
);

export const countDecremented = createAction(
  '[counter] decremented'
);

export const countReset = createAction(
  '[counter] reset'
);
