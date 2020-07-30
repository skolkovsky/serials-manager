import { Injectable } from '@angular/core';
import { SerialsService } from '../services/serials.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { SerialsActionTypes, SerialsActionType, GetSerialsSuccessAction, GetSerialsFailedAction } from './serials.actions';
import { concatMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Serial } from '../models/serial.model';

@Injectable({
	providedIn: 'root',
})
export class SerialsEffects {
	constructor(private serialsService: SerialsService, private actions$: Actions) {}

	@Effect() public loadSerials$ = this.actions$.pipe(
		ofType(SerialsActionTypes.GET_SERIALS),
		concatMap((action: SerialsActionType) => {
			return this.serialsService.getSerials(action.payload.countSerials, action.payload.pageNumber).pipe(
				map(
					(serials: Array<Serial>) =>
						new GetSerialsSuccessAction({
							serials: serials,
							countSerials: action.payload.countSerials,
							pageNumber: action.payload.pageNumber,
						})
				),
				catchError(() => of(new GetSerialsFailedAction({})))
			);
		})
	);
}
