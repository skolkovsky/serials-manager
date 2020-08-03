import { Component, OnInit, ɵEMPTY_MAP } from '@angular/core';
import { SerialsService } from './services/serials.service';
import { Constants } from './constants/constants';
import { SerialsFacade } from './store/serials.facade';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
	public serialGenres: Array<string> = Constants.ALL_GENRES;
	public premiereYears: Array<number>;
	public pagesSequence: Array<number>;

	constructor(private serialFacade: SerialsFacade) {}

	ngOnInit(): void {
		this.serialFacade.premiereYears$.pipe(tap((list: Array<number>) => (this.premiereYears = list))).subscribe();
		this.serialFacade.countPages$.pipe(tap((countPages: number) => (this.initArray(countPages)))).subscribe();
	}

	public initArray(countPages: number): void {
		this.pagesSequence = new Array();
		for (let i = 1; i <= countPages; i++) {
			this.pagesSequence.push(i);
		}
		console.log(this.pagesSequence);
	}

	public selectGenre(genre: string): void {
		const emittedValue: string | undefined = genre !== Constants.ALL_VALUES_STRING ? genre : undefined;
		this.serialFacade.loadSerialsByGenre(emittedValue);
	}

	public selectYear(year: string): void {
		const emittedValue: string | undefined = year !== Constants.ALL_VALUES_STRING ? year : undefined;
		this.serialFacade.loadSerialsByPremiereYear(emittedValue);
	}
}
