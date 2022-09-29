import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  // companyForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   phone: new FormControl(''),
  //   email: new FormControl(''),
  // });
  companyForm = this.fb.nonNullable.group({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.companyId = +this.activatedRoute.snapshot.params['id'];
    this.isNewCompany = !this.companyId;

    if (!this.isNewCompany) {
      // TODO: load company data and set on form
      // this.getCompany();
    }
  }

  saveCompany(): void {
    if (this.companyForm.invalid) {
      return;
    }

    const company: Company = {
      id: 0,
      name: this.companyForm.value.name!,
      phone: +this.companyForm.value.phone!,
      email: this.companyForm.value.email!,
    };

    if (this.isNewCompany) {
      this.companyService
        .addCompany(company)
        .subscribe(() => this.router.navigate(['/company/list']));
    }
  }

}
