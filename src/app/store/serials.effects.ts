import { Injectable } from '@angular/core';
import { SerialsService } from '../services/serials.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { SerialsActionTypes, SerialsActionType, GetSerialsSuccessAction, GetSerialsFailedAction } from './serials.actions';
import { concatMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Serial } from '../models/serial.model';;
import { Action } from '@ngrx/store';

@Injectable({
	providedIn: 'root',
})
export class SerialsEffects {
	constructor(private serialsService: SerialsService, private actions$: Actions) {}

	@Effect() public loadSerials$: Actions<Action> = this.actions$.pipe(
		ofType(SerialsActionTypes.GET_SERIALS),
		concatMap((action: SerialsActionType) => {
			return this.serialsService.getSerials(action.payload.countSerials, action.payload.pageNumber).pipe(
				map((response:any) => {
					return new GetSerialsSuccessAction({
						serials: response.serials,
						countSerials: action.payload.countSerials,
						pageNumber: action.payload.pageNumber,
					});
				}),
				catchError(() => of(new GetSerialsFailedAction({})))
			);
		})
    );
}
