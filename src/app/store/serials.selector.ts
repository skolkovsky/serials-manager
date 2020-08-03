import { AppState, SerialsState } from './app.state';
import { createSelector } from '@ngrx/store';
import { SerialsFacade } from './serials.facade';

const selectSerialsState = (state: AppState) => state.serialsState;
export const selectSerialsList = createSelector(selectSerialsState, (state: SerialsState) => state.serials);
export const selectPremiereYearList = createSelector(selectSerialsState, (state: SerialsState) => state.premiereYears);
export const selectCountPages = createSelector(selectSerialsState, (state: SerialsState) => state.countPages);