import { Serial } from '../models/serial.model';

export interface AppState {
  serialsState: SerialsState;
}

export interface SerialsState {
  pageNumber: number;
  countPages: number;
  serials: Array<Serial>;
  countSerials: number;
}
