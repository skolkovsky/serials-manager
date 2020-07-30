import { SerialsActionType, SerialsActionTypes } from './serials.actions';
import { SerialsState } from './app.state';

const initialState: SerialsState = {
	pageNumber: 0,
	countPages: 0,
	serials: new Array(),
	countSerials: 5,
};

export function serialsReducer(state: SerialsState = initialState, action: SerialsActionType): SerialsState {
	switch (action.type) {
		case SerialsActionTypes.GET_SERIALS:
			return {
				...state,
				countSerials: action.payload.countSerials,
				pageNumber: action.payload.pageNumber,
			};
		case SerialsActionTypes.GET_SERIALS_SUCCESS:
			return {
				...state,
				serials: action.payload.serials,
      };
    case SerialsActionTypes.GET_SERIALS_FAILED: 
      return {
        ...state
      }
		default:
			return {
				...state,
			};
	}
}
