import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { TemplateFormsPageComponent } from './pages/template-forms-page/template-forms-page.component';
import { ReactiveFormsPageComponent } from './pages/reactive-forms-page/reactive-forms-page.component';
import { FormListComponent } from './pages/reactive-forms-page/form-list/form-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { LoginComponent } from './login/login.component';
import { RxjsBasicsPageComponent } from './pages/rxjs-basics-page/rxjs-basics-page.component';
import { DocComponent } from './pages/doc/doc.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  //scrollPositionRestoration: "enabled"
};
const routes: Routes = [
  {
    path: '',
    title: 'Template-Driven Forms Playground',
    component: TemplateFormsPageComponent,
  },

  {
    path: 'reactive-forms',
    title: 'Reactive Forms Playground',
    component: ReactiveFormsPageComponent,
  },
  {
    path: 'reactive-list',
    title: 'Reactive List Playground',
    component: FormListComponent,
  },
  {
    path: 'item-detail',
    title: 'item detail',
    component: ItemDetailComponent,
  },
  {
    path: 'login',
    title: 'login',
    component: LoginComponent,
  },
  {
    path: 'rxjs-basics',
    title: 'rxjs',
    component: RxjsBasicsPageComponent,
  },
  {
    path: 'doc-page',
    title: 'doc',
    component: DocComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
