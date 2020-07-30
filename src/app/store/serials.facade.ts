import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetSerialsAction } from './serials.actions';

@Injectable({
	providedIn: 'root',
})
export class SerialsFacade {
	constructor(private store: Store<any>) {}

	public loadSerialsList(): void {
		this.store.dispatch(new GetSerialsAction({ pageNumber: 1, countSerials: 5 }));
	}
}
