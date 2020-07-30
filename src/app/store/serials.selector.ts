import { AppState, SerialsState } from './app.state';
import { createSelector } from '@ngrx/store';

const selectSerialsState = (state: AppState) => state.serialsState;
export const selectSerialsList = createSelector(selectSerialsState, (state: SerialsState) => state.serials);
