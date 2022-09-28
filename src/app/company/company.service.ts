import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  API_BASE = 'https://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${ this.API_BASE }/company`)
    .pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    console.error('CompanyService caught an error!', error);

    //throw error; <-- send the error further downstream
    return of([]); //<-- or DON'T send the error, and instead return something "gracefully"
  }
}
