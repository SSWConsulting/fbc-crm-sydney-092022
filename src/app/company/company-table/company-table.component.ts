import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../company';

@Component({
  selector: 'ssw-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent implements OnInit {

  @Input()
  companies: Company[] = [];

  @Output()
  deleteButtonClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  editCompany(companyId: number): void {
    this.router.navigate(['/company/edit', companyId]);
  }

  deleteCompany(companyId: number) {
    this.deleteButtonClicked.emit(companyId);
  }
}
