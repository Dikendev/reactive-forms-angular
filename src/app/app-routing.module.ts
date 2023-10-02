import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormsPageComponent } from './pages/template-forms-page/template-forms-page.component';
import { ReactiveFormsPageComponent } from './pages/reactive-forms-page/reactive-forms-page/reactive-forms-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'template', pathMatch: 'full' },
  {
    path: 'template',
    title: 'Template-Driven Forms Playground',
    component: TemplateFormsPageComponent,
  },
  {
    path: 'reactive-forms',
    title: 'Reactive Forms Playground',
    component: ReactiveFormsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
