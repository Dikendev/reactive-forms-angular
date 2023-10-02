import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { TemplateFormsPageComponent } from './pages/template-forms-page/template-forms-page.component';
import { FormsModule } from '@angular/forms';
import { BannedWordsDirective } from './directives/validators/banned-words.directive';
import { UniqueUsernameDirective } from './directives/validators/unique-username.directive';
import { HttpClientModule } from '@angular/common/http';
import { PasswordShouldMatchDirective } from './directives/validators/password-should-match.directive';
import { ReactiveFormsPageComponent } from './pages/reactive-forms-page/reactive-forms-page/reactive-forms-page.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
