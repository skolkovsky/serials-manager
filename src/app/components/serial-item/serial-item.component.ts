import { Component, OnInit, Input } from '@angular/core';
import { SerialsFacade } from 'src/app/store/serials.facade';
import { Serial } from 'src/app/models/serial.model';

@Component({
  selector: 'app-serial-item',
  templateUrl: './serial-item.component.html',
})
export class SerialItemComponent implements OnInit {
  
  @Input()
  public serial: Serial;
  
  constructor(private serialsFacade: SerialsFacade) {}

  public ngOnInit(): void {}
}
