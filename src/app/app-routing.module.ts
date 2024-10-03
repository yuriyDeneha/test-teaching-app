import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import { HeaderComponent } from './header/header.component';
import { UniversitiesComponent } from './universities/universities.component';

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
    component: UniversitiesComponent
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
