import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'ssw-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies$: Observable<Company[]> = of([]);

  constructor(private companyService: CompanyService) {

  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {

    // "short" way
    this.companies$ = this.companyService.getCompanies();


    // super long way
    // this.companyService.getCompanies().subscribe(
    //   {
    //     next: (companiesFromServer: Company[]) => {
    //       console.log('next eventcallback');
    //       this.companies = companiesFromServer;
    //     } ,
    //     error: (err: any) => {
    //       console.error('OMG ERROR', err);
    //     },
    //     complete: () => {
    //       console.log('completed!');
    //     }
    //   }
    // );
  }
}
