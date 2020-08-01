import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
	templateUrl: './select.component.html',
})
export class SelectComponent {
	@Input()
	public items: Array<string>;

	@Output()
	public selectValueChange: EventEmitter<string> = new EventEmitter<string>();

	public selectItem(option: any): void {
		this.selectValueChange.emit(option);
	}
}
