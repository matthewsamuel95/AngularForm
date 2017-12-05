import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidationService } from '../shared/validation.service';
import { Hero } from '../shared/hero';

@Component({
  selector: 'reactive-driven-form',
  templateUrl: './reactiveForm.component.html'
})
export class ReactiveFormComponent implements OnInit {
  heroForm: FormGroup;
  model: Hero; 
  submittedModel: Hero; 
  submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.model = new Hero('Smith', 'Jane', '98 Somewhere Street','','Fairbanks',
      'AK','95973','jane@foobar.com');
                     
      this.heroForm = this.formBuilder.group({
        lastName:     [this.model.lastName, Validators.required],
        firstName: [this.model.firstName, Validators.required],
        address1: [this.model.address1, Validators.required],
        address2: [this.model.address2],
        city: [this.model.city, Validators.required],
        state: [this.model.state, Validators.required],
        zipCode: [this.model.zipCode, Validators.required],
        email: [this.model.email, [Validators.required, ValidationService.emailValidator]]
      });
  }

  onSubmit({ value, valid }: { value: Hero, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
  }
}