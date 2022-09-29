import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, map, Observable, of, tap } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  API_BASE = 'https://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.API_BASE}/company`).pipe(
      catchError(this.handleError<Company[]>),
      finalize(() => {
        console.log('finalize triggered');
      })
    );
  }

  addCompany(company: Company): Observable<Company> {
    return this.http
      .post<Company>(
        `${this.API_BASE}/company`,
        company)
      .pipe(catchError(this.handleError<Company>));
  }

  deleteCompany(companyId: number): Observable<Company> {
    return this.http
      .delete<Company>(`${this.API_BASE}/company/${companyId}`)
      .pipe(catchError(this.handleError<Company>));
  }

  handleError<T>(error: any): Observable<T> {
    console.error('CompanyService.handleError:', error);
    return new Observable<T>();
  }
}
