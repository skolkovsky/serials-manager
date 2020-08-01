import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serial } from '../models/serial.model';
import { Constants } from '../constants/constants';

@Injectable({
	providedIn: 'root',
})
export class SerialsService {
	private readonly apiUrl: string = 'http://localhost:3000';
	constructor(private httpClient: HttpClient) {}

	public getSerials(
		countSerials: number,
		pageNumber: number,
		genre: string,
		premiere?: number
	): Observable<Array<Serial>> {
		let params: HttpParams = new HttpParams();
		params = params.set('countSerials', countSerials.toString());
		params = params.set('pageNumber', pageNumber.toString());
		params = params.set('genre', genre.toString());
		if (premiere) {
			params = params.set('premiere', premiere.toString());
		}
		return this.httpClient.get<Array<Serial>>(this.apiUrl + '/api/get/serials', { params: params });
	}
}
