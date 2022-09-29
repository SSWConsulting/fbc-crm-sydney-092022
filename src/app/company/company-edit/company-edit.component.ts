import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
  companyForm = this.fb.group({
    name: ['', [Validators.required]],
    phone: [''],
    email: [''],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
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
    // TODO: save company
  }

}
