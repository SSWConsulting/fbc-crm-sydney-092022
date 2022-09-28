import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  getCompanies() {
    return [
      { name: 'Company one', email: 'one@test.com', phone: 111 },
      { name: 'Company two', email: 'two@test.com', phone: 222 }
    ];
  }

}
