import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { banWords } from 'src/app/validators/ban-words.validators';

@Component({
  selector: 'app-reactive-forms-page',
  templateUrl: './reactive-forms-page.component.html',
  styleUrls: ['./reactive-forms-page.component.scss'],
})
export class ReactiveFormsPageComponent {
  @ViewChild(FormGroupDirective)
  public formDir!: FormGroupDirective;

  public useForm = this._formBuilder.group({
    firstName: [''],
    lastName: [''],
    nickName: [''],
    username: [],
    email: [''],
    yearOfBirth: [''],
    passport: [''],
    address: [''],
    phones: [''],
    skills: [''],
    password: [''],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
