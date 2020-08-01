import { Component, OnInit } from '@angular/core';
import { SerialsService } from './services/serials.service';
import { Constants } from './constants/constants';
import { SerialsFacade } from './store/serials.facade';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
	public serialGenres: Array<string> = Constants.ALL_GENRES;
	public premiereYears: Array<number>;

	constructor(private serialFacade: SerialsFacade) {}

	ngOnInit(): void {
		this.serialFacade.premiereYears$.pipe(tap((list: Array<number>) => (this.premiereYears = list))).subscribe();
	}

	public selectGenre(genre: string): void {
		this.serialFacade.loadSerialsByGenre(genre);
	}

	public selectYear(year: number): void {
		console.log(year);
	}
}
