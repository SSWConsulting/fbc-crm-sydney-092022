import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,
   FormGroup, UntypedFormControl,
   Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'ssw-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  companyId = 0;
  isNewCompany = false;
  companyForm: FormGroup = this.fb.group({
    name: new FormControl('', Validators.required),
    phone: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private fb: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.companyId = +this.activatedRoute.snapshot.params['id'];
    this.isNewCompany = !this.companyId;

    if (!this.isNewCompany) {
      // TODO: load company data and set on form
      // this.getCompany();
    }
  }

  saveCompany(): void {
    const {invalid, value} = this.companyForm;

    if (invalid) {
      return;
    }

    const company: Company = {
      ...value,
      id: 0,
    };

    if (this.isNewCompany) {
      this.companyService
        .addCompany(company)
        .subscribe(() => this.router.navigate(['/company/list']));
    }
  }

}
