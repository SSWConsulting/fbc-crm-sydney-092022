import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'ssw-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Company[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companies = [
      { name: 'Company one', email: 'one@test.com', phone: 111 },
      { name: 'Company two', email: 'two@test.com', phone: 222 }
    ];
  }
}
