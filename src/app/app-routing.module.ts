import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormsPageComponent } from './pages/template-forms-page/template-forms-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'template', pathMatch: 'full' },
  { path: 'template', component: TemplateFormsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
