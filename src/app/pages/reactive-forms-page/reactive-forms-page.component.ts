import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import {
  Observable,
  Subscription,
  bufferCount,
  filter,
  startWith,
  tap,
} from 'rxjs';
import { UserSkillsService } from 'src/app/services/user-skills.service';
import { banWords } from 'src/app/validators/ban-words.validators';
import { UniqueNicknameValidator } from 'src/app/validators/unique-nickname.validator';

@Component({
  selector: 'app-reactive-forms-page',
  templateUrl: './reactive-forms-page.component.html',
  styleUrls: ['./reactive-forms-page.component.scss'],
})
export class ReactiveFormsPageComponent implements OnInit, OnDestroy {
  [x: string]: any;
  public phoneLabels = ['Main', 'Mobile', 'Work', 'Home'];

  //
  public skills$!: Observable<string[]>;
  private initialFormValues: any;
  private ageValidators!: Subscription;
  private formPendingState!: Subscription;

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
    skills: this._formBuilder.record<FormControl<boolean>>({}),
    password: [''],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _uniqueNicknameValidator: UniqueNicknameValidator,
    private _userSkills: UserSkillsService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.skills$ = this._userSkills.getSkills().pipe(
      tap((skills) => this.buildSkillControls(skills)),
      tap(() => (this.initialFormValues = this.userForm.value))
    );

    this.ageValidators = this.userForm.controls.yearOfBirth.valueChanges
      .pipe(
        tap(() => this.userForm.controls.passport.markAsDirty()),
        startWith(this.userForm.controls.yearOfBirth.value)
      )
      .subscribe((yearOfBirth) => {
        this.isAdult(yearOfBirth)
          ? this.userForm.controls.passport.addValidators(Validators.required)
          : this.userForm.controls.passport.removeValidators(
              Validators.required
            );
        this.userForm.controls.passport.updateValueAndValidity();
      });

    this.formPendingState = this.userForm.statusChanges
      .pipe(
        bufferCount(2, 1),
        filter(([prevState]) => prevState === 'PENDING')
      )
      .subscribe(() => this._changeDetectorRef.markForCheck());
  }

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

  private buildSkillControls(skills: string[]) {
    skills.forEach((skill) =>
      this.userForm.controls.skills.addControl(
        skill,
        new FormControl(false, { nonNullable: true })
      )
    );
  }

  private isAdult(yearOfBirth: number): boolean {
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth >= 18;
  }

  ngOnDestroy(): void {
    this.ageValidators.unsubscribe();
    this.formPendingState.unsubscribe();
  }
}
