import { Injectable } from '@angular/core';
import { SerialsService } from '../services/serials.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { SerialsActionTypes, SerialsActionType, GetSerialsSuccessAction, GetSerialsFailedAction, GetSerialsAction } from './serials.actions';
import { concatMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Serial } from '../models/serial.model';
import { Action } from '@ngrx/store';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Constants } from '../constants/constants';

@Injectable({
	providedIn: 'root',
})
export class SerialsEffects {
	constructor(private serialsService: SerialsService, private actions$: Actions) {}

	@Effect()
	public loadSerials$: Actions<Action> = this.actions$.pipe(
		ofType(SerialsActionTypes.GET_SERIALS),
		concatMap((action: SerialsActionType) => {
			let serials$: Observable<SerialsActionType>;
			serials$ = this.serialsService
				.getSerials(
					Constants.DEFAULT_COUNT_SERIALS_ON_PAGE,
					Constants.DEFAULT_PAGE_NUMBER,
					action.payload.genre || Constants.DEFAULT_GENRE_SERIALS,
					action.payload.premiere
				)
				.pipe(
					map((response: any) => this.createGetSerialsSuccessAction(response, action)),
					catchError(() => of(new GetSerialsFailedAction({})))
				);

			return serials$;
		})
	);

	@Effect()
	public loadSerialsByGenre$: Actions<Action> = this.actions$.pipe(
		ofType(SerialsActionTypes.FILTER_SERIALS_BY_GENRE),
		concatMap((action: SerialsActionType) => of(new GetSerialsAction({ genre: action.payload.genre })))
	);

	@Effect()
	public loadSerialsByPremiereYear$: Actions<Action> = this.actions$.pipe(
		ofType(SerialsActionTypes.FILTER_SERIALS_BY_PREMIERE),
		concatMap((action: SerialsActionType) => of(new GetSerialsAction({ premiere: action.payload.premiere })))
	);

	private createGetSerialsSuccessAction(response: any, action: SerialsActionType): SerialsActionType {
		return new GetSerialsSuccessAction({
			serials: response.serials,
			countSerials: action.payload.countSerials,
			pageNumber: action.payload.pageNumber,
			premiereYears: response.premiereYears,
		});
	}
}
