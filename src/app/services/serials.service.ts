import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serial } from '../models/serial.model';

@Injectable({
	providedIn: 'root',
})
export class SerialsService {
	private readonly apiUrl: string = 'http://localhost:3000';

	constructor(private httpClient: HttpClient) {}

	public getSerials(countSerials: number, pageNumber?: number): Observable<Array<Serial>> {
		let params: HttpParams = new HttpParams();
		params = params.set('countSerials', countSerials.toString());
		if (pageNumber) {
			params = params.set('pageNumber', pageNumber.toString());
		}
		return this.httpClient.get<Array<Serial>>(this.apiUrl + '/api/get/serials', { params: params });
	}
}
