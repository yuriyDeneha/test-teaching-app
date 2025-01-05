import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import { HeaderComponent } from './header/header.component';
import { UniversitiesComponent } from './universities/universities.component';
import { MarginPaddingComponent } from './margin-padding/margin-padding.component';
import { FormulaComponent } from './formula/formula.component';
import { CreateUnivercityComponent } from './universities/create-univercity/create-univercity.component';

const routes: Routes = [
  {
    path: 'material',
    component: MaterialComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'universities',
    children: [
      {
        path: 'list',
        component: UniversitiesComponent
      },
      {
        path: 'create',
        component: CreateUnivercityComponent
      },
      {
        path: 'edit/:id',
        component: CreateUnivercityComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'margin-padding',
    component: MarginPaddingComponent
  },
  {
    path: 'formula',
    component: FormulaComponent
  },
  {
    path: '',
    redirectTo: '/universities',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
