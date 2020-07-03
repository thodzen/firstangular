import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/media.actions';

export interface MediaEntity {

  id: string;
  title: string;
  kind: 'show' | 'game';
  recommendedBy: string;
  consumed: boolean;
  dateConsumed: null | string;


}

export interface MediaState extends EntityState<MediaEntity> {

}

export const adapter = createEntityAdapter<MediaEntity>();

const initialState = adapter.getInitialState();


const reducerFunction = createReducer(
  initialState,
  on(actions.mediaAddedFailure, (s, a) => adapter.removeOne(a.payload.id, s)),
  on(actions.mediaAddedSuccess, (s, a) => {
    const oldState = adapter.removeOne(a.oldId, s);
    return adapter.addOne(a.payload, oldState);
  }),
  on(actions.mediaLoaded, (s, a) => adapter.setAll(a.payload, s)),
  on(actions.mediaAdded, (s, a) => adapter.addOne(a.payload, s)),
  on(actions.mediaRemoved, (s, a) => adapter.removeOne(a.payload.id, s)),
  on(actions.mediaConsumed, (s, a) => adapter.updateOne({
    id: a.payload.media.id,
    changes: {
      consumed: true,
      dateConsumed: a.payload.when.toISOString()
    }
  }, s))
);

export function reducer(state: MediaState = initialState, action: Action): MediaState {
  return reducerFunction(state, action);
}



