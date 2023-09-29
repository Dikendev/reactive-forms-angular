import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserInfo } from 'src/app/model/user-info.interface';

@Component({
  selector: 'app-template-forms-page',
  templateUrl: './template-forms-page.component.html',
  styleUrls: ['./template-forms-page.component.scss'],
})
export class TemplateFormsPageComponent implements OnInit, AfterViewInit {
  public bannedWords = ['admin', 'administrator', 'super_admin', 'moderator'];

  userInfo: UserInfo = {
    firstName: 'Diego',
    lastName: 'Guimarães',
    nickname: '',
    username: 'diken',
    email: '',
    yearOfBirth: 2023,
    passport: '',
    fullAddress: '',
    city: '',
    postCode: 0,
    password: 12345,
    confirmPassword: 0,
  };

  @ViewChild(NgForm)
  public formDir!: NgForm;

  public initFormValues: unknown;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      this.initFormValues = this.formDir.value;
    });
  }

  get years() {
    const now = new Date().getUTCFullYear();
    return Array(now - 1949)
      .fill('')
      .map((_, index) => now - index);
  }

  get isAdult() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.userInfo.yearOfBirth >= 18;
  }

  onSubmit(ngForm: NgForm, event: SubmitEvent) {
    console.log('ngForm', ngForm);
    console.log('event', event);
    console.log('Form submitted!!');
  }

  onReset(ngForm: NgForm, event: Event) {
    event.preventDefault();
    this.formDir.resetForm(this.initFormValues);
  }
}
