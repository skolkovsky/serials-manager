import { Action } from '@ngrx/store';
import { Serial } from '../models/serial.model';

export enum SerialsActionTypes {
	GET_SERIALS = '[Serials Action] Get serials',
	GET_SERIALS_SUCCESS = '[Serials Action] Get serials success',
	GET_SERIALS_FAILED = '[Serials Action] Get serials failed',
	FILTER_SERIALS_BY_NAME = '[Serials Action] Filter serials by name',
	FILTER_SERIALS_BY_GENRE = '[Serials Action] Filter serials by genre',
	FILTER_SERIALS_BY_PREMIERE = '[Serials Action] Filter serials by premiere',
}

export interface SerialsActionPayload {
	countSerials?: number;
	countPages?:number;
	pageNumber?: number;
	searchName?: string;
	networkType?: string;
	premiere?: Date;
	serials?: Array<Serial>;
}

export class GetSerialsAction implements Action {
	public readonly type: string = SerialsActionTypes.GET_SERIALS;
	constructor(public readonly payload: SerialsActionPayload) {}
}

export class GetSerialsSuccessAction implements Action {
	public readonly type: string = SerialsActionTypes.GET_SERIALS_SUCCESS;
	constructor(public readonly payload: SerialsActionPayload) {}
}

export class GetSerialsFailedAction implements Action {
	public readonly type: string = SerialsActionTypes.GET_SERIALS_FAILED;
	constructor(public readonly payload: SerialsActionPayload) {}
}

export class FilterSerialsByNameAction implements Action {
	public readonly type: string = SerialsActionTypes.FILTER_SERIALS_BY_NAME;
	constructor(public readonly payload: SerialsActionPayload) {}
}

export class FilterSerialsByGenreAction implements Action {
	public readonly type: string = SerialsActionTypes.FILTER_SERIALS_BY_GENRE;
	constructor(public readonly payload: SerialsActionPayload) {}
}

export class FilterSerialsByPremiereAction implements Action {
	public readonly type: string = SerialsActionTypes.FILTER_SERIALS_BY_PREMIERE;
	constructor(public readonly payload: SerialsActionPayload) {}
}

export type SerialsActionType =
	| GetSerialsAction
	| GetSerialsSuccessAction
	| GetSerialsFailedAction
	| FilterSerialsByGenreAction
	| FilterSerialsByNameAction
	| FilterSerialsByPremiereAction;
