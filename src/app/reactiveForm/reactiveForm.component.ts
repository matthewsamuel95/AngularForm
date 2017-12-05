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
  gender: string[];
  submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
      this.model = new Hero('Matt', 'Male', 'Sam', 'mat@email.com');
      
      this.gender = ['Male', 'Female'];                     
                     
      this.heroForm = this.formBuilder.group({
        name:     [this.model.name, Validators.required],
        lastname: [this.model.lastname, Validators.required],
        email:    [this.model.email, [Validators.required, ValidationService.emailValidator]],
        gender:    [this.model.gender, Validators.required]
      });
  }

  onSubmit({ value, valid }: { value: Hero, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
  }
}