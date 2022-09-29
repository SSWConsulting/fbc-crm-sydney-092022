import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, map, Observable, of, tap } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  API_BASE = 'https://firebootcamp-crm-api.azurewebsites.net/api';

  companies$: BehaviorSubject<Company[]> = new BehaviorSubject<Company[]>([])

  constructor(private http: HttpClient) {
    this.loadCompanies();
  }

  loadCompanies() {
    this.http.get<Company[]>(`${this.API_BASE}/company`)
    .subscribe(companies => {
      this.companies$.next(companies);
    })
  }

  getCompanies() {
    // return this.http.get<Company[]>(`${this.API_BASE}/company`).pipe(
    //   catchError(this.handleError<Company[]>),
    //   finalize(() => {
    //     console.log('finalize triggered');
    //   })
    // );

    return this.companies$;
  }

  getCompany(companyId: number): Observable<Company> {
    return this.http.get<Company>(`${this.API_BASE}/company/${companyId}`)
      .pipe(catchError(this.handleError<Company>));
  }

  addCompany(company: Company): Observable<Company> {
    return this.http
      .post<Company>(
        `${this.API_BASE}/company`,
        company)
      .pipe(catchError(this.handleError<Company>));
  }

  updateCompany(company: Company): Observable<Company> {
    return this.http
      .put<Company>(
        `${this.API_BASE}/company/${company.id}`,
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
