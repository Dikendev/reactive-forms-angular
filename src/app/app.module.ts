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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TemplateFormsPageComponent,
    BannedWordsDirective,
    UniqueUsernameDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
