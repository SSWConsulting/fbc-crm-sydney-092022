import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Company } from './company/company';
import { CompanyService } from './company/company.service';

@Component({
  selector: 'ssw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  companyCount$!: Observable<number>;
  title = 'Welcome to Sydney';

  constructor(
    private companyService: CompanyService
  ) {
  }

  ngOnInit(): void {
    this.companyCount$ = this.companyService.getCompanies()
    .pipe(
      map((companies: Company[]) => companies.length)
    );
  }
}
