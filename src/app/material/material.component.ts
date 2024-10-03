import { Component, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-material',
  standalone: true,
  providers: [
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    RouterModule
  ],
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent {


  firstName = '';
  lastName: string = '';

  email: string = '';
  phone: string = '';

  birthday: Date | null = null;
  age: number = 0;
  aboutYourself: string = '';

  password: string = '';
  sex: string = '';
  country: string = '';


  showAllVariables() {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.email);
    console.log(this.phone);
    console.log(this.birthday);
    console.log(this.age);
    console.log(this.aboutYourself);
    console.log(this.password);
    console.log(this.sex);
    console.log(this.country);
  }
}
