import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {
	@Input()
	public items: Array<string>;

	@Output()
	public selectValueChange: EventEmitter<string> = new EventEmitter<string>();

	constructor() {}

	ngOnInit(): void {}

	public selectItem(option: any): void {
		this.selectValueChange.emit(option);
	}
}
