import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  {
    path: 'material',
    component: MaterialComponent
  },
  {
    path: '',
    redirectTo: '/material',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
