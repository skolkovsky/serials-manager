import { Component, OnInit } from '@angular/core';
import { SerialsService } from './services/serials.service';
import { Constants } from './constants/constants';
import { SerialsFacade } from './store/serials.facade';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
	public serialGenres: Array<string> = Constants.ALL_GENRES;

	constructor(private serialFacade: SerialsFacade) {}

	ngOnInit(): void {}

	public selectGenre(genre: string): void {
		console.log(genre);
		this.serialFacade.loadSerialsByGenre(genre);
	}
}
