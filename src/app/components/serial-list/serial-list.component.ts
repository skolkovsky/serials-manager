import { Component, OnInit } from '@angular/core';
import { SerialsFacade } from 'src/app/store/serials.facade';
import { Serial } from 'src/app/models/serial.model';

@Component({
	selector: 'app-serial-list',
	templateUrl: './serial-list.component.html',
})
export class SerialListComponent implements OnInit {
	public readonly titles: string[] = ['name', 'season', 'network', 'primiere'];
	public serials: Array<Serial>;
	constructor(private serialsFacade: SerialsFacade) {}

	public ngOnInit(): void {
		this.serialsFacade.loadSerialsList();
		this.serialsFacade.serials$.subscribe((serials: Array<Serial>) => (this.serials = serials));
	}
}
