import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetSerialsAction, FilterSerialsByGenreAction } from './serials.actions';
import { Observable } from 'rxjs';
import { selectSerialsList } from './serials.selector';
import { SerialsState, AppState } from './app.state';
import { Serial } from '../models/serial.model';

@Injectable({
	providedIn: 'root',
})
export class SerialsFacade {
	public serials$: Observable<Array<Serial>> = this.store.pipe(select(selectSerialsList));

	constructor(private store: Store<AppState>) {}

	public loadSerialsList(): void {
		this.store.dispatch(new GetSerialsAction({ pageNumber: 1, countSerials: 5 }));
	}

	public loadSerialsByGenre(genre: string): void {
		this.store.dispatch(new FilterSerialsByGenreAction({ genre }));
	}
}
