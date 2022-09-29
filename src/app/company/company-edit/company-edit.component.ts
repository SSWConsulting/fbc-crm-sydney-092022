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
      this.getCompany();
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
      this.companyService.addCompany(company)
    } else {
      company.id = this.companyId;
      this.companyService.updateCompany(company)
    }

    this.router.navigate(['/company', 'list']);
    // this.router.navigateByUrl('/company/list'); <<< Equivalent
  }

  private getCompany(): void {
    this.companyService.getCompany(this.companyId)
      .subscribe(company => this.companyForm.patchValue(company))
  }

}
