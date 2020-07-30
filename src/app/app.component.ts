import { Component, OnInit } from '@angular/core';
import { SerialsService } from './services/serials.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
	constructor(private serialsService: SerialsService) {}

	ngOnInit(): void {
		this.serialsService.getSerials(5).subscribe((serials) => {
			console.log(serials);
		});
	}
}
