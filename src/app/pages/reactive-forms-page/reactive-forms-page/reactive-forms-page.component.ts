import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { banWords } from 'src/app/validators/ban-words.validators';
import { UniqueNicknameValidator } from 'src/app/validators/unique-nickname.validator';

@Component({
  selector: 'app-reactive-forms-page',
  templateUrl: './reactive-forms-page.component.html',
  styleUrls: ['./reactive-forms-page.component.scss'],
})
export class ReactiveFormsPageComponent {
  public phoneLabels = ['Main', 'Mobile', 'Work', 'Home'];

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
    nickname: [
      '',
      {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[\w.]+$/),
        ],
        asyncValidator: [
          this._uniqueNicknameValidator.validate.bind(
            this._uniqueNicknameValidator
          ),
        ],
        updateOn: 'blur',
      },
    ],
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: [
      '',
      [Validators.required, Validators.email, Validators.minLength(2)],
    ],
    yearOfBirth: this._formBuilder.nonNullable.control(
      this.years[this.years.length - 1]
    ),
    passport: ['', [Validators.pattern(/^[A-Z]{2}[0-9]{6}$/)]],
    address: this._formBuilder.group({
      fullAddress: ['', Validators.required],
      city: ['', Validators.required],
      postCode: ['', Validators.required],
    }),
    phones: this._formBuilder.array([
      this._formBuilder.group({
        label: this._formBuilder.nonNullable.control(this.phoneLabels[0]),
        phone: '',
      }),
    ]),
    skills: [''],
    password: [''],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _uniqueNicknameValidator: UniqueNicknameValidator
  ) {}

  get years() {
    const now = new Date().getUTCFullYear();
    return Array(now - 1949)
      .fill('')
      .map((_, index) => now - index);
  }

  //para adicionar mais telefones
  public onAddPhone() {
    console.log('add phone button clicked!!!');
    this.userForm.controls.phones.insert(
      0,
      new FormGroup({
        label: new FormControl(this.phoneLabels[0], { nonNullable: true }),
        phone: new FormControl(''),
      })
    );
  }

  //nome ja diz tudo 😜
  public onRemovePhone(index: number) {
    console.log('remove phone button clicked!!!');
    this.userForm.controls.phones.removeAt(index);
  }
}
