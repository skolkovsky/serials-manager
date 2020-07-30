import { SerialsActionType } from './serials.actions';
import { SerialsState } from './app.state';

const initialState: SerialsState = {
	pageNumber: 0,
	countPages: 0,
	serials: new Array(),
	countSerials: 5,
};

export function serialsReducer(state: SerialsState = initialState, action: SerialsActionType): SerialsState {
	switch (action.payload) {
		default:
			return {
				...state,
			};
	}
}
