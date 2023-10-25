import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { TemplateFormsPageComponent } from './pages/template-forms-page/template-forms-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannedWordsDirective } from './directives/validators/banned-words.directive';
import { UniqueUsernameDirective } from './directives/validators/unique-username.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PasswordShouldMatchDirective } from './directives/validators/password-should-match.directive';
import { ReactiveFormsPageComponent } from './pages/reactive-forms-page/reactive-forms-page.component';
import { FormListComponent } from './pages/reactive-forms-page/form-list/form-list.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { LoginComponent } from './login/login.component';
import { RxjsBasicsPageComponent } from './pages/rxjs-basics-page/rxjs-basics-page.component';
import { DocComponent } from './pages/doc/doc.component';
import { MarkdownModule } from 'ngx-markdown';
import { HomeComponent } from './pages/home/home.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import {
  NgcCookieConsentConfig,
  NgcCookieConsentModule,
} from 'ngx-cookieconsent';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost', // it is recommended to set your domain, for cookies to work properly
  },
  palette: {
    popup: {
      background: '#ffffff',
    },
    button: {
      background: '#f1d600',
    },
  },
  theme: 'edgeless',
  type: 'opt-out',
  layout: 'my-custom-layout',
  layouts: {
    'my-custom-layout': '{{messagelink}}{{compliance}}',
  },
  elements: {
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}} 
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{cookiePolicyHref}}" target="_blank">{{cookiePolicyLink}}</a>, 
      <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link" href="{{privacyPolicyHref}}" target="_blank">{{privacyPolicyLink}}</a> and our 
      <a aria-label="learn more about our terms of service" tabindex="2" class="cc-link" href="{{tosHref}}" target="_blank">{{tosLink}}</a>
    </span>
    `,
  },
  content: {
    message:
      'By using our site, you acknowledge that you have read and understand our ',

    cookiePolicyLink: 'Cookie Policy',
    cookiePolicyHref: 'https://cookie.com',

    privacyPolicyLink: 'Privacy Policy',
    privacyPolicyHref: 'https://privacy.com',

    tosLink: 'Terms of Service',
    tosHref: 'https://tos.com',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TemplateFormsPageComponent,
    BannedWordsDirective,
    UniqueUsernameDirective,
    PasswordShouldMatchDirective,
    ReactiveFormsPageComponent,
    FormListComponent,
    ViewPageComponent,
    ItemDetailComponent,
    LoginComponent,
    RxjsBasicsPageComponent,
    DocComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer }),
    MarkdownModule.forRoot(),
    NgcCookieConsentModule.forRoot(cookieConfig),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
