import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  color = 'yellow';
  title = 'Angular-Material';
  submitted = false;
  demoForm;
  fromSubmission: {};

  constructor() { }

  ngOnInit() {
    this.demoForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ])),
      body: new FormControl('')
    });
  }

  onSubmit(formData, form) {
    this.demoForm.reset();
    form.resetForm();
    this.submitted = true;
    this.fromSubmission = formData;
  }

}
