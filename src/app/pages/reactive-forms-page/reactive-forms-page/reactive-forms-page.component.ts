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

  public userForm = this._formBuilder.group({
    firstName: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        banWords(['admin', 'dummy']),
      ],
      ,
    ],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    nickName: [''],
    username: [''],
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
